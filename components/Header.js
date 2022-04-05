import {Text, View} from "react-native-web";
import {StyleSheet} from "react-native";
import {palette} from '../config/theme'
import {useContext} from "react";
import GameContext from "../contexts/game";

export default function Header() {

    const { players } = useContext(GameContext)

    return (
        <View style={styles.container}>
            {players.map((player, index) => (
                <View key={index}>
                    <Text style={styles.playerName}>{ player.name }</Text>
                    <Text style={styles.score}>{ player.score }</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: palette.primary,
        paddingVertical: 20,
    },
    playerName: {
        color: palette.white,
        fontSize: 12,
    },
    score: {
        color: palette.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})