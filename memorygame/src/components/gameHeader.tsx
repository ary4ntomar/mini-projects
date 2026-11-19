import "../index.css";

type GameHeaderProps = {
  score: number;
  moves: number;
  onNewGame: any;
};

export const Gameheader = ({ score, moves, onNewGame }: GameHeaderProps) => {
  return (
    <div className="cardheader">
      <h2>👾Memory Card Game</h2>

      <div className="scoreboard">
        <div className="score">
          SCORE :<span className="scorecounter">{score}</span>
        </div>
        <div className="moves">
          MOVES :<span className="movecounter">{moves}</span>
        </div>
      </div>

      <button className="button" onClick={onNewGame}>
        New Game
      </button>
    </div>
  );
};
