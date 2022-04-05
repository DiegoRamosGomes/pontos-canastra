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
        setPlayers([])
        setRounds([])
        setStarted(false)
    }

    function toggleGame() {
        started ? endGame() : startGame()
    }

    function addPlayer(player: {name: string, score: number}) {
        const newPlayers = players
        newPlayers[newPlayers.length] = player
        setPlayers(newPlayers)
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