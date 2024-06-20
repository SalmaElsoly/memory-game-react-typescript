import { CardProps } from "../types";
import "../style/card.css";

const Card: React.FC<CardProps> = ({ id, image, flipped, matched,onClick }) => {
    return (
        <div className={`card ${flipped || matched ? "flipped" : ""}`} onClick={()=>onClick(id)}>
        <div className="card-inner">
          <div className="card-front">
            <img src={image} alt={`card-${id}`} />
          </div>
          <div className="card-back">
            <img src="assets/back.jpg" alt="card-backside" />
          </div>
        </div>
      </div>
    );
}

export default Card;