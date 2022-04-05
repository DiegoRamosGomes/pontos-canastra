import {View, TextInput, StyleSheet, Button} from "react-native";
import {palette} from "../config/theme";
import {useContext, useState} from "react";
import GameContext from "../contexts/game";

export default function Scoreboard() {

    const {addRound, players, started} = useContext(GameContext)
    const [scores, setScores] = useState([])

    function onChangeInput(value, index) {
        const newScores = [...scores]
        newScores[index] = value
        setScores(newScores)
    }

    function handleAddRound() {
        let roundPoints = []
        players.map((player, index) => {
            roundPoints[index] = scores[index]
        })
        addRound(...roundPoints)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                disabled={!started}
                style={styles.input}
                placeholder={'Pontos'}
                onChangeText={(v) => onChangeInput(v, 0)}
            />
            <Button disabled={!started} color={palette.success} title={'+'} onPress={handleAddRound}/>
            <TextInput
                disabled={!started}
                style={styles.input}
                placeholder={'Pontos'}
                onChangeText={(v) => onChangeInput(v, 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        marginHorizontal: 'auto',
        width: '30%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: palette.primary,
        borderRadius: 5,
        paddingHorizontal: 15
    }
})