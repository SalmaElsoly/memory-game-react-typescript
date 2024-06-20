export interface CardProps {
    id: number;
    image: string;
    flipped: boolean;
    matched: boolean;
    onClick: (id: number) => void;
}

export interface BoardProps {
    cardsNumber: number;
}

export interface GameContextProps {
    solvedCards: number;
    setSolvedCards: (solvedCards: number) => void;
}

