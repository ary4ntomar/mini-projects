import "../index.css";

type cardProps = {
  card: any;
  handleCardClick: any;
};

export const Cards = ({ card, handleCardClick }: cardProps) => {
  return (
    <div
      className={`card ${card.isMatched ? "matched" : " "}`}
      onClick={() => {
        handleCardClick(card);
      }}
    >
      {" "}
      {card.isFlipped ? (
        <div className="card-back">{card.value}</div>
      ) : (
        <div className="card-front">🔮</div>
      )}
    </div>
  );
};
