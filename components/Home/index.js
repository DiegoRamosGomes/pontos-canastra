import {Button, ScrollView, View} from "react-native";
import Header from "../Header";
import Scoreboard from "../Scoreboard";
import LineSeparator from "../LineSeparator";
import {palette} from "../../config/theme";
import {useContext} from "react";
import GameContext from "../../contexts/game";
import Round from "../Round";

export default function Home() {

    const {started, toggleGame, rounds} = useContext(GameContext)

    function handleToggleGame() {
        toggleGame()
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Header/>
                <Scoreboard/>
                <LineSeparator/>

                {rounds.map((points, index) => <Round key={index} points={points}/>)}
            </ScrollView>
            <Button color={palette.success} title={(started ? 'Encerrar' : 'Iniciar') + ' partida'}
                    onPress={handleToggleGame}/>
        </View>
    );
}