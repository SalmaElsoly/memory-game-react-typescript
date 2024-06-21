import { CongratsProps } from "../types";
import '../style/congrats.css';


const Congrats: React.FC<CongratsProps> = ({onPlayAgain}) => {
    return (
      <div className="congrats">
        <h1>Congratulations!</h1>
        <div className="emoji-container">
          <span className="emoji">🎉</span>
        </div>
        <p>You've solved all the cards!</p>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    );
}

export default Congrats;