import { ReactNode, createContext,useState} from 'react';
import { GameContextProps } from '../types';

const GameContext = createContext<GameContextProps | undefined>(undefined);

const GameProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [game, setGame] = useState<GameContextProps>({
        solvedCards: 0,
        setSolvedCards: (solved: number) => {
            setGame({ ...game, solvedCards: solved })
        }
    });
    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;