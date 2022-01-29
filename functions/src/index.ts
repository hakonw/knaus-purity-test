import type {HttpFunction} from "@google-cloud/functions-framework/build/src/functions";
import {SaveCallback, Storage} from "@google-cloud/storage";
import {randomUUID} from "crypto";
import express = require("express");

const uuidV4Regex =
  /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
const isValidV4UUID = (uuid: string) => uuidV4Regex.test(uuid);

const storage = new Storage();
const bucket = storage.bucket("question-stat");

type Message = {
  userId: string;
  checkedIds: string[];
};

type SavedData = {
  userId: string;
  date: string;
  checkedIds: string[];
};

type AcummulatedData = {
  average: number;
  stats: {
    id: string;
    percentChecked: number;
  }[];
};

export const cors = (req: express.Request, res: express.Response): boolean => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // https://cloud.google.com/functions/docs/samples/functions-http-cors
    res.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    // stop preflight requests here
    res.status(204).send("");
    return true;
  }

  return false;
};

export const fault = (
  placement: string,
  res: express.Response,
  e: Error
): void => {
  console.error(placement, e);
  res.status(400).json({placement: placement, error: e.message}).end();
};

export const getDefault: HttpFunction = (req, res) => {
  if (cors(req, res)) {
    return;
  }

  res.status(404).send("Bad URL");
};

export const storeQuizAnswers: HttpFunction = (req, res) => {
  if (cors(req, res)) {
    return;
  }

  if (req.method !== "POST") {
    // Return a "method not allowed" error
    res.status(405).end();
    return;
  }

  if (req.get("Content-Type") !== "application/json") {
    // Unsuported media type
    res.status(415).end();
    return;
  }

  // TODO make a better verifier
  const message = req.body as Message;

  const userId = isValidV4UUID(message.userId) ? message.userId : randomUUID();
  const checkedIds = Array.from(new Set(message.checkedIds)); // TODO remove all non-valid

  const data: SavedData = {
    userId: userId,
    date: new Date().toISOString(),
    checkedIds: checkedIds,
  };

  const file = bucket.file(`${userId}.json`);
  const contents: string = JSON.stringify(data);
  const options = {
    metadata: {contentType: "application/json"},
  };

  res.contentType("application/json");

  file
    .save(contents, options)
    .then(() => res.json({status: "ok"}))
    .catch(e => fault("save", res, e as Error));

  // res.type("application/json");
  // res.status(200).json({message: "hei"});
  // res.send(JSON.stringify({messsage: "hei"}));
};

export const getStats: HttpFunction = async (req, res) => {
  if (cors(req, res)) {
    return;
  }

  let total = 0;
  const score: number[] = [];
  const amountChecked: Map<string, number> = new Map();
  try {
    const [files] = await bucket.getFiles();

    for (const file of files) {
      total += 1;
      const data = await file
        .download()
        .then(
          response => JSON.parse(response[0].toString("utf-8")) as SavedData
        );

      data.checkedIds.forEach(id =>
        amountChecked.set(id, (amountChecked.get(id) ?? 0) + 1)
      );
      score.push(data.checkedIds.length);
    }

    const stats = Array.from(amountChecked).map(([id, count]) => ({
      id: id,
      percentChecked: count / total,
    }));

    const average = score.reduce((acc, cur) => acc + cur) / total;

    const body: AcummulatedData = {average: average, stats: stats};
    res.json(body);
  } catch (e) {
    fault("stats", res, e as Error);
  }
};

const app = express();
app.use("/store", storeQuizAnswers);
app.use("/stats", getStats);
app.use(getDefault);

export const api: HttpFunction = app;
