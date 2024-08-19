import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";


const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="Welcome"
        options={{
          title: "Welcome",
          tabBarIcon: () => <FontAwesome name="home" size={30} color="black" />,
        }}
      />

      <Tabs.Screen
        name="Category"
        options={{
          title: "Category",
          tabBarIcon: () => (
            <MaterialIcons name="category" size={30} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
