import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "./AuthScreen";
import main from "./MainNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="main" component={main} />
    </Tab.Navigator>
  );
}
