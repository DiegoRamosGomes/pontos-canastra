import {createContext, useState} from "react";

const GameContext = createContext({started: false, toggleGame: () => {}});

export const GameProvider = ({children}) => {
    const [started, setStarted] = useState(false)

    function startGame() {
        setStarted(true)
    }

    function endGame() {
        setStarted(false)
    }

    function toggleGame() {
        started ? endGame() : startGame()
    }

    return (
        <GameContext.Provider value={{started, toggleGame}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext