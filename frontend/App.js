import React from "react";
import { Provider } from "react-redux";
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
