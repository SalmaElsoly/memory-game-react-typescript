import { useState, useEffect, useCallback } from 'react';
import { CardProps } from '../types';


const useGameLogic= () => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);

    const initializeCards = useCallback((numberOfCards: number) => {
        const images = Array.from({ length: numberOfCards }, (_, index) => `../assets/${index + 1}.png`);
        const handleCardClick = (id: number) => {
            if (disabled) return;
            setFlipped([...flipped, id]);
            const updatedCards = [...cards];
            const clickedCardIndex = cards.findIndex(card => card.id === id);
            const clickedCard = { ...updatedCards[clickedCardIndex], isFlipped: true };
            updatedCards[clickedCardIndex] = clickedCard;
            setCards(updatedCards);
            if (flipped.length === 2) {
                if (cards[clickedCardIndex].image === cards[cards.findIndex(card => card.id === flipped[0])].image) {
                    cards[clickedCardIndex].matched = true;
                    cards[cards.findIndex(card => card.id === flipped[0])].matched = true;
                    setSolved(solved + 1);
                    setFlipped([]);
                } else {
                    setDisabled(true);
                    setTimeout(() => {
                        updatedCards[clickedCardIndex].flipped = false;
                        updatedCards[cards.findIndex(card => card.id === flipped[0])].flipped = false;
                        setCards(updatedCards);
                        setFlipped([]);
                        setDisabled(false);
                    }, 1000);
                }
            }
        };
        for (let i:number = 0; i < numberOfCards; i++){
            cards.push({
                id: i+1,
                image: images[i],
                flipped: false,
                matched: false,
                onClick: (id: number) => {
                    setFlipped([...flipped, id]);
                }
            });
            cards.push({
                id: i + numberOfCards+1,
                image: images[i],
                flipped: false,
                matched: false,
                onClick: (id: number) => {
                    setFlipped([...flipped, id]);
                }
            });
        }
        setCards(cards.sort(() => Math.random() - 0.5));
        
     },[]);
    return { cards, flipped, solved, initializeCards};
}

export default useGameLogic;