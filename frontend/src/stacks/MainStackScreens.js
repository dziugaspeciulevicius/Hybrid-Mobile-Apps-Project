import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Button } from "react-native";

import OrdersScreen from "../screens/Orders.screen";
import UsersScreen from "../screens/Users.screen";
import ProductsScreen from "../screens/Products.screen";
import ProfileScreen from "../screens/Profile.screen";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Orders" component={OrdersScreen} />
      <MainStack.Screen name="Users" component={UsersScreen} />
      <MainStack.Screen name="Products" component={ProductsScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
