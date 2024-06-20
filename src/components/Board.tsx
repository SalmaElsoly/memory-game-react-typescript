import {  useEffect, useContext, useRef } from "react";
import { BoardProps, GameContextProps } from "../types";
import Card from "./Card";
import useGameLogic from "../hooks/useGameLogic";
import { GameContext } from "../contexts/GameContext";
import "../style/board.css";

const Board: React.FC<BoardProps> = ({ cardsNumber }) => {
  const { cards, solved, initializeCards, handleCardClick } = useGameLogic();
  const game = useContext(GameContext) as GameContextProps;
  const prevSolvedRef = useRef<number>();
  useEffect(() => {
      prevSolvedRef.current = solved;
      console.log(prevSolvedRef.current);
  }, [solved]);
  useEffect(() => {
    initializeCards(cardsNumber);
  }, [cardsNumber, initializeCards]);
  useEffect(() => {
    const prevSolved = prevSolvedRef.current;
    if (solved !== prevSolved) {
        game.setSolvedCards(solved);
        console.log(game.solvedCards);
    }
  }, [solved, cardsNumber, game]);

  return (
    <div className="board">
      <div
        className={`grid-board ${cardsNumber > 4 ? "large" : "small"} ${
          cardsNumber === 16 ? "rows-16" : ""
        }`}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            flipped={card.flipped}
            matched={card.matched}
            onClick={() => {
              handleCardClick(card.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
