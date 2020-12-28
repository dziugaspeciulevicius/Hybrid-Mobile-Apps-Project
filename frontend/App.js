// import React from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import store from "./src/store.js";
// import { StatusBar, View, Text } from "react-native";

// import Login from "./src/screens/Login.screen";
// import Users from "./src/screens/Users.screen";
// import Products from "./src/screens/Products.screen";
// import Orders from "./src/screens/Orders.screen";

// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import "@react-navigation/material-bottom-tabs";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// const App = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Login">
//           {userInfo.isAdmin ? (
//             <>
//               <Drawer.Screen name="Users" component={Users} />
//               <Drawer.Screen name="Products" component={Products} />
//               <Drawer.Screen name="Orders" component={Orders} />
//             </>
//           ) : (
//             <Drawer.Screen name="Login" component={Login} />
//           )}
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store.js";

import { NavigationContainer } from "@react-navigation/native";

import AppStackScreens from "./src/stacks/AppStackScreens";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStackScreens />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
