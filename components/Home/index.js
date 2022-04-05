import {Button, ScrollView, View} from "react-native";
import Header from "../Header";
import Scoreboard from "../Scoreboard";
import LineSeparator from "../LineSeparator";
import Round from "../Round";
import {palette} from "../../config/theme";
import {useContext} from "react";
import GameContext from "../../contexts/game";

export default function Home() {
    const { started, toggleGame } = useContext(GameContext)

    function handleToggleGame() {
        toggleGame()
    }

    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <Header/>
                <Scoreboard/>
                <LineSeparator/>
                <Round/>
                <Round/>
                <Round/>
                <Round/>
                <Round/>
                <Round/>
                <Round/>
            </ScrollView>
            <Button color={palette.success} title={(started ? 'Encerrar' : 'Iniciar') + ' partida'} onPress={handleToggleGame}/>
        </View>
    );
}