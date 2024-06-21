import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { GameContextProps, ProgressBarProps } from '../types';
import '../style/progressBar.css';
const ProgressBar: React.FC<ProgressBarProps> = ({cardsNumber}) => {
    const game = useContext(GameContext) as GameContextProps;
    return (
        <div className="progress-bar">
            <progress  value={game.solvedCards} max={cardsNumber}></progress>
            <span>{game.solvedCards}/{cardsNumber}</span>
        </div>
    );
}

export default ProgressBar;