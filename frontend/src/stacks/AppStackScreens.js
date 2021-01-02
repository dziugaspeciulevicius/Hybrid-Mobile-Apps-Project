import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";

import AuthStackScreens from "./AuthStackScreens";
import MainStackScreens from "./MainStackScreens";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Auth" component={AuthStackScreens} />
        <AppStack.Screen name="Main" component={MainStackScreens} />
    </AppStack.Navigator>
  );
};
