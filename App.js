import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {GameProvider} from "./contexts/game";
import Home from "./components/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <GameProvider>
                <Home />
            </GameProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
