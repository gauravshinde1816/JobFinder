import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screen/WelcomeScreen";
import AuthScreen from "./screen/AuthScreen";
import { Provider } from "react-redux";
import store from "./store";
import main from "./screen/MainNavigator";
import { Button } from "react-native-paper";
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={({ navigation }) => ({
              title: "Welcome To Job Finder",
              headerShown: false,
              headerRight: () => (
                <Button onPress={() => navigation.navigate("Tabs")}>
                  next
                </Button>
              ),
            })}
          />
          <Stack.Screen name="auth" component={AuthScreen} />
          <Stack.Screen name="Tabs" component={main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
