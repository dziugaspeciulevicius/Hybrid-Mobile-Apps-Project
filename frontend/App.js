import React from "react";
import { Provider } from "react-redux";

// import Home from "./src/screens/Home.screen";
import Users from "./src/screens/Users.screen";
import Products from "./src/screens/Products.screen";
import Orders from "./src/screens/Orders.screen";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/*<Drawer.Screen name="Home" component={Home} />*/}
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Orders" component={Orders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
