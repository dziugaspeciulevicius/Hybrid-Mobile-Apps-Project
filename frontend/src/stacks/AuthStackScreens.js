import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login.screen";
import MainStackScreens from "./MainStackScreens";

export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Main" component={MainStackScreens} />
    </AuthStack.Navigator>
  );
};
