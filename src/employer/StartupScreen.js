import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";

const { height, width } = Dimensions.get("window");
export default class StartupScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#4286f4" />
        <ImageBackground
          source={require("../images/employerzone.jpeg")}
          style={styles.container}
        />
        <View
          style={{
            position: "absolute",

            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 30,
              marginTop: 35,
              paddingHorizontal: 15,
              fontWeight: "900",
              marginLeft: 8
            }}
          >
            Find Your Future Right Now!
          </Text>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              marginTop: 5,
              paddingHorizontal: 15,
              marginLeft: 8
            }}
          >
            Jobseekers are waiting to work in an organisation like yours.
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 100
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ELogIn")}
          >
            <View
              style={{
                width: width - 40,
                height: 40,
                backgroundColor: "#4286f450"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  color: "white",
                  fontWeight: "500"
                }}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ESignup")}
          >
            <View
              style={{
                width: width - 40,
                height: 40,
                backgroundColor: "#4286f450",
                marginTop: 20
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  color: "white",
                  fontWeight: "500"
                }}
              >
                Signup
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  }
});
