import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

export default class EProfile extends Component {
  render() {
    // let stars = [];
    // for (var i = 1; i <= 5; i++) {

    // 	let path = require('../images/star-filled.png');
    // 	if (i > ratingObj.ratings) {
    // 		path = require('../images/star-unfilled.png');
    // 	}
    // 	stars.push((<Image style={styles.image} source={path} />));
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 130,
            height: 130,
            marginTop: 15,
            alignSelf: "center"
          }}
        >
          <Image
            source={require("../images/Ncell.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              borderRadius: 70,
              resizeMode: "cover",
              borderColor: "green",
              borderWidth: 2
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
            Ncell
          </Text>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 60 }}
        >
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                marginLeft: 20,
                borderBottomColor: "lightgrey",
                borderBottomWidth: 2,
                alignSelf: "stretch",
                padding: 15
              }}
            >
              <Text style={{ fontWeight: "500", color: "black" }}>Email</Text>
              <Text>Ncell@gmail.com</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>
                Phone no.
              </Text>
              <Text>+97798XXXXXXXX</Text>
              <Text>061XXXXXX</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>Address</Text>
              <Text>Lakeside-6</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>Status</Text>
              <Text style={{ color: "green" }}>Active</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>
                Registration No.
              </Text>
              <Text>2019-8524-0034</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>
                Estd. Date
              </Text>
              <Text>June 1, 2010</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>
                Membership
              </Text>
              <Text>since June 1, 2019</Text>
            </View>
            <View style={[styles.profileInfo, { flexDirection: "row" }]}>
              <Text style={{ fontWeight: "500", color: "black" }}>Ratings</Text>
              <View
                style={{
                  marginLeft: 10,
                  backgroundColor: "#FF00FF",
                  width: 130,
                  height: 30,
                  flexDirection: "row"
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../images/star-filled.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../images/star-filled.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../images/star-filled.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../images/star-unfilled.png")}
                />
                <Image
                  style={styles.image}
                  source={require("../images/star-unfilled.png")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  profileInfo: {
    marginTop: 8,
    marginLeft: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    padding: 15
  },
  image: {
    width: 25,
    height: 25
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
