import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseData: [],
      refreshing: false
    };
  }
  componentDidMount() {
    this.dataLoading();
  }
  dataLoading = () => {
    this.setState({ refreshing: true });
    let firebasekofinaldata = [];
    fetch("https://gethired-b559f.firebaseio.com/UsersDetail.json")
      .catch(err => {
        Alert.alert("Something went wrong");
        console.log(err);
        this.setState({ refreshing: false });
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log("parsed", parsedRes);
        let keys = Object.keys(parsedRes);
        console.log("keys", keys);
        keys.forEach(key => {
          console.log("parsed", parsedRes[key]);

          //firebasekofinaldata = [...firebasekofinaldata, parsedRes[key]]
          firebasekofinaldata.push(parsedRes[key]);
        });

        console.log("final data", firebasekofinaldata);
        this.setState({
          firebaseData: firebasekofinaldata,
          refreshing: false
        });
        console.log(this.state.firebaseData);
      });
  };
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
              <Text>yuzankhadka@gmail.com</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontWeight: "500", color: "black" }}>
                Phone no.
              </Text>
              <Text>+97798XXXXXXXX</Text>
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
                Jobs Completed
              </Text>
              <Text>2</Text>
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
