import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Entypo, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
const BottomTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={26} color="black" />
            ) : (
              <Feather name="home" size={26} color="black" />
            ),
          tabBarLabelStyle: {
            marginTop: -10,
          },
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'grey'
        }}
      />
      <Tabs.Screen
        name="settings-screen/index"
        options={{
          headerTitle: "Settings",
          title: "Settings",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="settings" size={26} color="black" />
            ) : (
              <AntDesign name="setting" size={26} color="black" />
            ),
          tabBarLabelStyle: {
            marginTop: -10,
          },
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'grey'
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
