import { AcummulatedData } from "./App";

const StatsCard = (props: {
  score: number;
  total: number;
  isLoading: boolean;
  stats: AcummulatedData | undefined;
}) => {
  return (
    <div className="p-4 my-5 shadow rounded bg-white text-center">
      Du endte opp med {props.score} av {props.total} poeng!
      <p>Der mindre poeng betyr at du er mer pure!</p>
      {props.isLoading && props.stats === undefined ? (
        <div className="text-center mt-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Henter statistikk...</span>
          </div>
        </div>
      ) : (
        <>
          <div>Gjennomsnittet var {props.stats?.average.toFixed(2)}</div>
          <div>
            Statistikken som vises er hvor mange som har krysset den av.
          </div>
        </>
      )}
    </div>
  );
};

export default StatsCard;
