import {Button, ScrollView, StyleSheet, View} from "react-native";
import Header from "../Header";
import Scoreboard from "../Scoreboard";
import LineSeparator from "../LineSeparator";
import {palette} from "../../config/theme";
import {useContext} from "react";
import GameContext from "../../contexts/game";
import Round from "../Round";

export default function Home() {

    const {started, toggleGame, rounds, addPlayer} = useContext(GameContext)

    function handleToggleGame() {
        if (!started) {
            addPlayer({name: 'Player 1', score: 0})
            addPlayer({name: 'Player 2', score: 0})
        }
        toggleGame()
    }

    return (
        <>
            {started &&
                <View style={{flex: 1}}>
                    <ScrollView>
                        <Header/>
                        <Scoreboard/>
                        <LineSeparator/>

                        {rounds.map((points, index) => <Round key={index} points={points}/>)}
                    </ScrollView>
                    <Button color={palette.success} title={'Encerrar partida'} onPress={handleToggleGame}/>
                </View>
            }
            {!started &&
                <View style={styles.startGameContainer}>
                    <Button color={palette.success} title={'Iniciar partida'} onPress={handleToggleGame}/>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    startGameContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});