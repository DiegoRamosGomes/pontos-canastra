import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import LineSeparator from "./components/LineSeparator";
import Round from "./components/Round";
import {palette} from "./config/theme";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
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
            <Button color={palette.success} title="Encerrar partida" onPress={() => {}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
