import { createContext, useState, ReactNode } from 'react';
import { Interface } from 'readline';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode
}

export function ChallengesProvider({ children  }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);

    function levelUp() {
        setLevel( level + 1);
    }

    return (
        <ChallengesContext.Provider value={{level: level, levelUp}}>
            {children}
        </ChallengesContext.Provider>
    );
}