import { Gameheader } from "./components/gameHeader";
import { Cards } from "./components/cards";
import { useEffect, useState } from "react";

type cards = {
  id: number;
  value: string;
  isMatched: boolean;
  isFlipped: boolean;
};

const cardValues = [
  "⚽️",
  "🏏",
  "🎳",
  "🎯",
  "🥊",
  "🎾",
  "🪁",
  "⛳️",
  "⚽️",
  "🏏",
  "🎳",
  "🎯",
  "🥊",
  "🎾",
  "🪁",
  "⛳️",
];

function App() {
  const [cards, setCards] = useState<cards[]>([]);
  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const shuffledCard = [...cardValues]
      .map((value, index) => ({
        id: index,
        value,
        isMatched: false,
        isFlipped: false,
      }))
      .sort(() => Math.random() - 0.5);

    setChoiceOne(null);
    setChoiceTwo(null);
    setScore(0);
    setMoves(0);
    setCards(shuffledCard);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card: cards) => {
    //don't allow clicking if card is already filpped ,matched
    if (card.isFlipped || card.isMatched) {
      return;
    }
    //update the card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    if (choiceOne === null) {
      setChoiceOne(card);
    } else if (choiceTwo === null) {
      setChoiceTwo(card);
      setMoves((prevMoves) => prevMoves + 1); // count this attempt as a move
    }
  };

  useEffect(() => {
    //only run if both choices actually exists and are not null
    if (choiceOne && choiceTwo) {
      if (choiceOne.value === choiceTwo.value) {
        //match-cards
        setCards((prevCards) => {
          return prevCards.map((c) =>
            c.value === choiceOne.value ? { ...c, isMatched: true } : c,
          );
        });
        setScore((prevScore) => prevScore + 1); //increase score on match
        resetTurn(); //clear choices for the next turn
      } else {
        // wait 1 sec so the user sees the cards , then flip them back
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === choiceOne.id || c.id === choiceTwo.id
                ? { ...c, isFlipped: false }
                : c,
            ),
          );

          resetTurn(); //clear chocies for next turn
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <div className="app">
      <Gameheader score={score} moves={moves} onNewGame={initializeGame} />

      <div className="card-grid">
        {cards.map((card) => (
          <Cards card={card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
