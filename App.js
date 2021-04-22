import React, { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import {createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ShopNavigator from "./navigation/ShopNavigator";
import shopReducer from "./store/reducers/shop";

enableScreens();

const rootReducer = combineReducers({
  shop: shopReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "zendots": require("./assets/fonts/ZenDots-Regular.ttf")
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return <Provider store={store}><ShopNavigator /></Provider>;
}