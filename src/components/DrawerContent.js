import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  BackHandler
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
const myIcon = <Icon name="person-add" size={45} color="white" />;
const myIcon1 = <Icon name="create" size={20} color="white" />;

export default class DrawerContent extends Component {
  render() {
    console.log("insdie drawer content", this.props.navigation.navigate);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this.props.navigation.navigate("Login1")}
              >
                <View style={styles.penIcon}>{myIcon1}</View>
                <Text style={styles.text1}>Login</Text>
              </TouchableOpacity>

              <View style={styles.iconBack}>
                <TouchableOpacity
                  onPress={() => PopUpModal.setModalVisible(true)}
                >
                  <View style={styles.icon}>{myIcon}</View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bottomLinks}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Employer Zone</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.linkText}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.linkText}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.linkText}>About_Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Alert.alert("Exit", "Are you sure?", [
                  { text: "Yes", onPress: () => BackHandler.exitApp() },
                  {
                    text: "No",
                    onPress: () => this.props.navigation.goBack(null)
                  }
                ])
              }
            >
              <Text style={styles.linkText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>Get Hired</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>

        <Modal />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroller: {
    flex: 1
  },
  header: {
    height: "27%",
    backgroundColor: "#7dc685",
    borderBottomWidth: 2
  },
  penIcon: {
    marginVertical: 83,
    marginLeft: 25
  },
  text1: {
    color: "white",
    fontSize: 20,
    marginVertical: 80,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold"
  },
  icon: {
    width: 52,
    height: 52,
    marginRight: 20,
    marginTop: 30,
    backgroundColor: "#70dcf4",
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 1
  },
  iconBack: {
    flex: 1,
    alignItems: "flex-end"
  },
  bottomLinks: {
    backgroundColor: "#ffffff",
    height: "80%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 30,
    marginTop: 15
  },
  linkText: {
    fontSize: 16,
    padding: 15,
    color: "#777777"
  },

  footer: {
    height: "8%",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 2,
    borderColor: "lightgrey"
  },
  description: {
    flex: 1,
    fontSize: 14,
    fontFamily: "arial",
    color: "grey",
    textAlign: "left",
    marginLeft: 20
  },
  version: {
    flex: 1,
    fontSize: 12,
    color: "lightgrey",
    textAlign: "right",
    marginRight: 20
  }
});
