import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Navigation from "./src/route/Navigation";
import Loading from "./src/components/Loading";
import EMainApp from "./src/employer/EMainApp";

// import * as firebase from "firebase";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}
/*const SwitchNavigator = createSwitchNavigator({
           Loading: Loading,
           Navigation: Navigation,
     
 },
           {
               initialRouteName: 'Loading'
           })
           const AppSwitchNavigator = createAppContainer(SwitchNavigator)*/
