import { View, Text, Switch } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 flex justify-center items-center dark:bg-dark-background space-y-6">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl text-primary-main font-poppins-bold">
          Dark Mode
        </Text>
        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>

      <Text className="mx-4  text-md text-justify dark:text-white font-poppinsRegular">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
      <View className="h-48 w-full bg-light-primary dark:bg-dark-primary" />
    </View>
  );
};

export default HomeScreen;
