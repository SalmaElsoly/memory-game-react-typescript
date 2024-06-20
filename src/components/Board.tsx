import { useState } from 'react';
import { BoardProps, CardProps } from '../types';
import Card from './Card';

const Board: React.FC<BoardProps> = ({ cardsNumber }) => {
    const [cards, setCards] = useState<CardProps[]>([]);
    return (<div className="board">
        
    </div>
    );
};
 

export default Board;