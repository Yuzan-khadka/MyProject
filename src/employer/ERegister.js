import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Image, Button } from "react-native";

import Logo from "../components/Logo";
import ERegisterForm from "./ERegisterForm";

export default class ERegister extends Component {
  static navigationOptions = {
    title: "Register",
    headerTitleStyle: { color: "#777777" }
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <ERegisterForm onLoginPress={this.props.navigation} />
        <View style={styles.signup}>
          <Text>Already have an account?</Text>
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("ELogIn")}
          />
        </View>
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
