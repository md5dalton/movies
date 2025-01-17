import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../constants"
import Button from "../components/Button"
import { StatusBar } from "expo-status-bar"
import { router } from "expo-router"

export default () =>  (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] h-[300px] w-full"
                        resizeMode="contain"
                    />
                    <View className="relative mt-6">
                        <View></View>
                        <Text
                            className="text-3xl text-white font-bold text-center"
                        >
                            Discover endless possiblities with{" "}
                            <Text className="text-secondary-200">Movies</Text>
                        </Text>
                    </View>
                    <Text className="text-gray-100 text-sm text-center font-pregular mt-8">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Movies
                    </Text>
                    <Button
                        containerStyles="w-full mt-8"
                        onClick={() => router.push("/signIn")}
                    >Continue with email</Button>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    )