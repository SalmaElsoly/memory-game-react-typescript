import { useState } from 'react';
import Board from './components/Board';
import LoadingBar from './components/LoadingBar';


function App() {
  const [numOfCards, setNumOfCards] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);


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
              onChange={(e) => setNumOfCards(6)}
            />
            <label>8</label>
          </div>
          <div>
            <input
              type="radio"
              name="numOfCards"
              value="16"
              onChange={(e) => setNumOfCards(8)}
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
      ) : (<div>
          <LoadingBar/>
          <Board cardsNumber={numOfCards} />
        </div>
      )}
    </div>
  );
}

export default App;
