import {Text, View} from "react-native-web";
import {StyleSheet} from "react-native";
import {palette} from "../config/theme";

export default function Round(props) {
    return (
        <View style={styles.scoreContainer}>
            {props.points.map((point, index) => {
                return (
                    <Text key={index} style={styles.score}>{point}</Text>
                )
            })}
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