import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"

import LoginScreen from "../screens/Login.screen";

export default AuthStackScreens = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
    )
}
