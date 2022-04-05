import {View, TextInput, StyleSheet, Button} from "react-native";
import {palette} from "../config/theme";

export default function Scoreboard() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder={'Pontos'} />
            <Button color={palette.success} title={'+'} />
            <TextInput style={styles.input} placeholder={'Pontos'} />
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