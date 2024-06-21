import { useState, useContext,useEffect } from "react";
import Board from "./components/Board";
import Congrats from "./components/Congrats";
import { GameContext } from "./contexts/GameContext";

function App() {
  const [numOfCards, setNumOfCards] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const game = useContext(GameContext);

  useEffect(() => {
    if (game?.solvedCards === numOfCards) {
      const timer = setTimeout(() => {
        setShowCongrats(true);
      }, 1000); // Delay in milliseconds
      return () => clearTimeout(timer);
    } else {
      setShowCongrats(false);
    }
  }, [game?.solvedCards, numOfCards]);

  const playAgain = () => {
    setGameStarted(false);
    setNumOfCards(0);
    game?.setSolvedCards(0);
   };

  return (
    <div className="modal">
      {!gameStarted ? (
        <form>
          <label>Number of Cards</label>
          <div>
            <input
              type="radio"
              name="numOfCards"
              value="4"
              onChange={(e) => setNumOfCards(4)}
            />
            <label>4</label>
          </div>
          <div>
            <input
              type="radio"
              name="numOfCards"
              value="8"
              onChange={(e) => setNumOfCards(8)}
            />
            <label>8</label>
          </div>

          <div>
            <input
              type="radio"
              name="numOfCards"
              value="16"
              onChange={(e) => setNumOfCards(16)}
            />
            <label>16</label>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setGameStarted(true);
            }}
          >
            Start Game
          </button>
        </form>
      ) : (
        <div>
          {showCongrats ? (
            <Congrats onPlayAgain={playAgain} />
          ) : (
            <Board cardsNumber={numOfCards} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
