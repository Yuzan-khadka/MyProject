import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Navigation from "./src/route/Navigation";
import Loading from "./src/components/Loading";
import EMainApp from "./src/employer/EMainApp";
import OneSignal from "react-native-onesignal"; // Import package from node modules

// import * as firebase from "firebase";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("0654cc5b-b20a-41fd-b466-7d9d3bdcce7a");

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
    OneSignal.configure(); // triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

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
