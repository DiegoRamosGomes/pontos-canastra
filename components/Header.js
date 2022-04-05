import {Text, View} from "react-native-web";
import {StyleSheet} from "react-native";
import {palette} from '../config/theme'

export default function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.playerName}>Jogador 1</Text>
                <Text style={styles.score}>1529</Text>
            </View>
            <View>
                <Text style={styles.playerName}>Jogador 1</Text>
                <Text style={styles.score}>1529</Text>
            </View>
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