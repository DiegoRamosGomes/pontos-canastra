import {View} from "react-native";
import {palette} from "../config/theme";
import React from "react";

export default function LineSeparator() {
    return (
        <View
            style={{
                marginVertical: 30,
                borderBottomColor: palette.gray,
                borderBottomWidth: 1,
            }}
        />
    )
}