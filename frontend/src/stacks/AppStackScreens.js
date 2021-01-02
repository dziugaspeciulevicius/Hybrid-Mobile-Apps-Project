import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreens from "./AuthStackScreens";
import MainStackScreens from "./MainStackScreens";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();

  // const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
      <AppStack.Screen name="Main" component={MainStackScreens} />
    </AppStack.Navigator>

    // return (
    //     <AppStack.Navigator headerMode="none">
    //     {userInfo ?
    //         (
    //         <AppStack.Screen name="Main" component={MainStackScreens} />
    //     ) : (
    //         <AppStack.Screen name="Auth" component={AuthStackScreens} />
    //     )}
    //     </AppStack.Navigator>
  );
};
