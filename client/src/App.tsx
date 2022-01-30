import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Header";
import QuestionList from "./QuestionList";
import Questions from "./Questions";
import { v4 as uuid } from "uuid";
import StatsCard from "./StatsCard";
import { getCookie, setCookie } from "typescript-cookie";

export type AcummulatedData = {
  average: number;
  total: number;
  stats: {
    id: string;
    percentChecked: number;
  }[];
};

type Props = {};
type State = {
  score: number;
  checkedIds: string[];
  initialCheckedIds: string[];
  isComplete: boolean;
  isLoading: boolean;
  uniqueId: string;
  acummulatedData: AcummulatedData | undefined;
};

const url = "https://us-central1-knaus-purity-test.cloudfunctions.net/api";
//const url = "http://localhost:8080";

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    let uniqueId = getCookie("uniqueId");
    if (uniqueId === undefined) {
      uniqueId = uuid();
      setCookie("uniqueId", uniqueId);
    }

    const initial = JSON.parse(getCookie("checked") ?? "[]") as string[];

    this.state = {
      score: initial.length,
      checkedIds: initial,
      initialCheckedIds: initial,
      isComplete: false,
      isLoading: false,
      uniqueId: uniqueId,
      acummulatedData: undefined,
    };
  }

  sendStats = (userId: string, checkedIds: string[]): Promise<void> => {
    const body = {
      userId: userId,
      checkedIds: checkedIds,
    };

    const sendResponse = fetch(url + "/store", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return sendResponse
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  recieveStats = (): Promise<AcummulatedData> => {
    const statsResponse = fetch(url + "/stats", {
      method: "get",
    });

    return statsResponse
      .then((res) => res.json())
      .then((json) => json as AcummulatedData);
  };

  onClick = (): void => {
    this.setState({ isLoading: true });
    this.sendStats(this.state.uniqueId, this.state.checkedIds);
    this.recieveStats()
      .then((data) => this.setState({ acummulatedData: data }))
      .then(() => console.log("Stored stats in the store"))
      .catch(console.error)
      .finally(() => this.setState({ isLoading: false }));
  };

  updateScore = (questionId: string, checked: boolean): void => {
    if (checked) {
      const ids = [...this.state.checkedIds, questionId];
      setCookie("checked", JSON.stringify(ids));
      this.setState({
        checkedIds: ids,
        score: this.state.score + 1,
      });
    } else {
      const ids = this.state.checkedIds.filter((id) => id !== questionId);
      setCookie("checked", JSON.stringify(ids));
      this.setState({
        checkedIds: ids,
        score: this.state.score - 1,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <header>
          <Header score={this.state.score} total={Questions.length}></Header>
        </header>

        <main>
          <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white mt-5">
            <div className="p-4 shadow rounded">
              <QuestionList
                onCheck={this.updateScore}
                stats={this.state.acummulatedData}
                initialCheckedIds={this.state.initialCheckedIds}
              ></QuestionList>

              <button
                type="submit"
                className="btn col-12 btn-outline-primary mt-4"
                onClick={() => {
                  this.setState({ isComplete: true });
                  this.onClick();
                }}
              >
                Generate results!
              </button>
              <div className="text-muted text-center">
                (Leverer du med 0 i score telles det ikke. Flere submissions
                overskriver ditt forrige resultat.)
              </div>
            </div>

            {this.state.isComplete && (
              <StatsCard
                score={this.state.score}
                total={Questions.length}
                isLoading={this.state.isLoading}
                stats={this.state.acummulatedData}
              ></StatsCard>
            )}
          </div>
        </main>

        <footer>
          <div className="container text-center font-italic text-muted p-4 mb-5">
            <div>Laget av Lise & Wardeberg</div>
            <div>
              (Det brukes cookies, og vi samler ikke personlig informasjon.
              Tnx!)
            </div>
            <a href="https://github.com/hakonw/knaus-purity-test">Github</a>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
