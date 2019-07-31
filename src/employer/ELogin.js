import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Image, Button } from "react-native";

import Logo from "../components/Logo";
import EForm from "./EForm";

import * as firebase from "firebase";

export default class ELogin extends Component {

   constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
    var that = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        that.setState({
          loggedin: true
        });
        console.log("Logged  in", user);
        console.log(user.uid);
      } else {
        that.setState({
          loggedin: false
        });
        console.log("Logged out");
      }
    });
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
      {this.state.loggedin == true ? (
          <View>{this.props.navigation.navigate("EMainApp")}</View>
        ) : (
          <View>
        <Logo />
        <EForm onLoginPress={this.props.navigation} />
        <View style={styles.signup}>
          <Text>New to GetHired?</Text>
          <Button
            title="Get Started"
            onPress={() => this.props.navigation.navigate("ESignup")}
          />
        </View>
        </View>
         )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signup: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  }
});
