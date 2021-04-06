import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewScreen from "./ReviewScreen";
import SettingScreen from "./SettingScreen";
import { View } from "react-native";
import { Button } from "react-native-paper";

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="review">
      <Stack.Screen
        name="review"
        component={ReviewScreen}
        options={({ navigation }) => ({
          title: "Review Jobs",
          headerRight: () => {
            return (
              <View>
                <Button
                  mode="outlined"
                  onPress={() => navigation.navigate("settings")}
                  style={{
                    marginRight: 10,
                  }}
                >
                  Settings
                </Button>
              </View>
            );
          },
          headerLeft: null,
        })}
      />
      <Stack.Screen name="settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
