import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import MapScreen from "./MapScreen";
import DeckScreen from "./DeckScreen";
import StackNavigator from "./StackNavigator";

const main = ({ navigation }) => {
  const Tabs = createBottomTabNavigator();

  useEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      [navigation]
    );
  });
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="maps" component={MapScreen} />
      <Tabs.Screen name="deck" component={DeckScreen} />
      <Tabs.Screen name="reviews" component={StackNavigator} />
    </Tabs.Navigator>
  );
};

export default main;
