import { View, Text } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"

export default () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>home</Text>
            <StatusBar style="auto" />
        </View>
    )
}
