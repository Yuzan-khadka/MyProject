import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ width: 130, height: 130, marginTop: 15 }}>
            <Image
              source={require("../images/sanjay.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                borderRadius: 70,
                resizeMode: "cover"
              }}
            />
          </View>
          <View style={{ marginTop: 8 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                color: "#000"
              }}
            >
              Yuzan Khadka
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center"
  },
  button: {
    color: "#06a30e"
  },
  text: {
    color: "#777777",
    fontSize: 14,
    textAlign: "center"
  },
  lowerPart: {
    padding: 50
  }
});
{
  /* <View>
          <View style={{ width: 150 }}>
            <Button
              title="Log In"
              color="#06a30e"
              onPress={() => this.props.navigation.navigate("LogIn")}
            />
          </View>
          <Text style={styles.text}>To see your profile</Text>
        </View>
        <View style={styles.lowerPart}>
          <View style={{ width: 150 }}>
            <Button
              title="Sign Up"
              color="#06a30e"
              onPress={() => this.props.navigation.navigate("SignUp")}
            />
          </View>
          <Text style={styles.text}>To create your profile</Text>
        </View> */
}
