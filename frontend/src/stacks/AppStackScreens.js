import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreens from "./AuthStackScreens";
import MainStackScreens from "./MainStackScreens";
import OrderDetails from "../screens/OrderDetails.screen";
import EditUserScreen from "../screens/EditUser.screen";
import EditProductScreen from "../screens/EditProduct.screen";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
      <AppStack.Screen name="Main" component={MainStackScreens} />
      <AppStack.Screen name="OrderDetails" component={OrderDetails} />
      <AppStack.Screen name="EditUser" component={EditUserScreen} />
      <AppStack.Screen name="EditProduct" component={EditProductScreen} />
    </AppStack.Navigator>
  );
};
