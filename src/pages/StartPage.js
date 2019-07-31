import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class StartPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
       <StatusBar backgroundColor='#296802'/>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            style={{ width: 150, height: 120 }}
            source={require("../images/GetHiredLogo1.jpg")}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            <View
              style={{
                backgroundColor: "#42a803",
                width: width - 40,
                height: 40,
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
                I am Job-Seeker
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }} onPress={() => this.props.navigation.navigate("EmployerZone")}>
            <View
              style={{
                backgroundColor: "#42a803",
                width: width - 40,
                height: 40,
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
                I am Employer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
