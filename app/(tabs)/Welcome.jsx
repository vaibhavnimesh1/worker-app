import { View, Text } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "outfit", fontSize: 40 }}>Welcome</Text>
    </View>
  );
};

export default Welcome;
