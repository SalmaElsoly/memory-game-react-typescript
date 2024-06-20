import { useState, useCallback } from "react";
import { CardProps } from "../types";

const useGameLogic = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleCardClick = (id: number) => {
    if (disabled) return;

    const clickedCardIndex = cards.findIndex((card) => card.id === id);
    const clickedCard = cards[clickedCardIndex];
    if (clickedCard.flipped || clickedCard.matched) return;

    const newFlipped = [...flipped, id];
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );

    setCards(updatedCards);

    if (newFlipped.length === 2) {
      setDisabled(true);

      const firstFlippedCardIndex = cards.findIndex(
        (card) => card.id === newFlipped[0]
      );
      const firstFlippedCard = cards[firstFlippedCardIndex];

      if (firstFlippedCard.image === clickedCard.image) {
        const newCards = updatedCards.map((card) =>
          card.id === firstFlippedCard.id || card.id === clickedCard.id
            ? { ...card, matched: true }
            : card
        );
        setCards(newCards);
        setSolved(solved + 1);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          const newCards = updatedCards.map((card) =>
            card.id === firstFlippedCard.id || card.id === clickedCard.id
              ? { ...card, flipped: false }
              : card
          );
          setCards(newCards);
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    } else {
      setFlipped(newFlipped);
    }
  };

  const initializeCards = useCallback((numberOfCards: number) => {
    console.log(numberOfCards);
    const images = Array.from(
      { length: numberOfCards },
      (_, index) => `assets/${Math.floor(Math.random() * 16) + 1}.png`
    );
    let newCards: CardProps[] = [];
    for (let i: number = 0; i < numberOfCards; i++) {
      newCards.push({
        id: i + 1,
        image: images[i],
        flipped: false,
        matched: false,
        onClick: (id: number) => handleCardClick(id),
      });
      newCards.push({
        id: i + 1 + numberOfCards,
        image: images[i],
        flipped: false,
        matched: false,
        onClick: (id: number) => handleCardClick(id),
      });
    }
    setCards(newCards.sort(() => Math.random() - 0.5));
  }, []);
  return { cards, flipped, solved, initializeCards, handleCardClick };
};

export default useGameLogic;
