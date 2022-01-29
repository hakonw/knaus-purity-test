import { AcummulatedData } from "./App";

const StatsCard = (props: {
  score: number;
  total: number;
  isLoading: boolean;
  stats: AcummulatedData | undefined;
}) => {
  return (
    <div className="p-4 my-5 shadow rounded bg-white text-center">
      Du endte opp med {props.score} av {props.total} poeng! (
      {(((props.total - props.score) / props.total) * 100).toFixed(1)}% pure)
      <p>Der færre poeng betyr at du er mer pure!</p>
      {props.isLoading && props.stats === undefined ? (
        <div className="text-center mt-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Henter statistikk...</span>
          </div>
        </div>
      ) : (
        <>
          <div>Gjennomsnittet var {props.stats?.average.toFixed(2)}</div>
          <div>Antall folk som har tatt quizen: {props.stats?.total}.</div>
          <div className="text-muted">
            Statistikken som vises er hvor mange som har krysset den av.
          </div>
        </>
      )}
    </div>
  );
};

export default StatsCard;
