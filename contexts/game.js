import {createContext, useState} from "react";

const GameContext = createContext({
    started: false,
    toggleGame: () => {},
    rounds: [],
    players: [],
    addPlayer: () => {},
    addRound: () => {},
});

export const GameProvider = ({children}) => {
    const [started, setStarted] = useState(false)
    const [rounds, setRounds] = useState([])
    const [players, setPlayers] = useState([])

    function startGame() {
        setStarted(true)
    }

    function endGame() {
        setStarted(false)
    }

    function toggleGame() {
        started ? endGame() : startGame()
    }

    function addPlayer(player: {name: string}) {
        setPlayers([...players, player])
    }

    function addRound(...points: number[]) {
        setRounds([...rounds, points])
    }

    return (
        <GameContext.Provider value={{started, toggleGame, rounds, players, addPlayer, addRound}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext