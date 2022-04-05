import {Text, View} from "react-native-web";
import {StyleSheet} from "react-native";
import {palette} from "../config/theme";

export default function Round() {
    return (
        <View style={styles.scoreContainer}>
                <Text style={styles.score}>1529</Text>
                <Text style={styles.score}>1529</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    score: {
        color: palette.secondary,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})