import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function New_screen() {
    const params = useLocalSearchParams();
  return (
    <View>
      <Text>new_screen</Text>
      <Text>{params.name}</Text>
    </View>
  );
}
