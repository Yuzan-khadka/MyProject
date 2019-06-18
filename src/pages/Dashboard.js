import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
  Alert,
  FlatList
} from "react-native";
import firebase from "../components/firebase";

class HomeTop extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ color: "black" }}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

class Post extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: 40, height: 40 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              borderRadius: 30,
              resizeMode: "cover"
            }}
          />
        </View>
        <View style={{ paddingLeft: 10, flexDirection: "row" }}>
          <Text style={{ fontWeight: "700", fontSize: 17, color: "black" }}>
            {this.props.name}
          </Text>
          <Text style={{ paddingLeft: 5, fontSize: 17, color: "#333333" }}>
            {" "}
            posted a job.
          </Text>
        </View>
      </View>
    );
  }
}

class Post1 extends Component {
  render() {
    return (
      <View>
        <View
          style={{ padding: 10, marginTop: 5, width: width - 40, height: 450 }}
        >
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <TouchableOpacity onPress={() => alert("Please Login to continue.")}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              backgroundColor: "#42a803",
              width: width - 40,
              height: 45
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "500" }}>
              {" "}
              Apply{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseData: [],
      refreshing: false
    };
  }
  _onRefresh = () => {
    this.dataLoading();
  };

  _renderItem = ({ item }) => (
    <View style={{ padding: 20, marginTop: 20, backgroundColor: "#ffffff" }}>
      <Post imageUri={require("../images/sanjay.jpg")} name="Yuzan Khadka" />
      <View style={{ padding: 5, marginTop: 5 }}>
        <View style={{ flexDirection: "row" ,margin: 5, padding: 5}}>
          <Text style={{ fontWeight: "500" }}>JobTitle:</Text>
          <Text>{item.JobTitle}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 5, padding: 5 }}>
          <Text style={{ fontWeight: "500" }}>JobDescription:</Text>
          <Text>{item.JobDescription}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 5, padding: 5 }}>
          <Text style={{ fontWeight: "500" }}>JobType:</Text>
          <Text>{item.JobType}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Post1
          imageUri={{
            uri:
              "https://source.unsplash.com/random/500" +
              Math.floor(Math.random() * 800 + 500)
          }}
        />
        {/* <Post1 imageUri={require("../images/vacancy.jpg")} /> */}
      </View>
    </View>
  );
  componentDidMount() {
    this.dataLoading();
  }

  dataLoading = () => {
    this.setState({ refreshing: true });
    let firebasekofinaldata = [];
    console.log("suraj");

    fetch("https://gethired-b559f.firebaseio.com/Post.json")
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
    console.log("data", this.state.firebaseData);
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#296802" />
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={styles.container}>
            <View style={{ backgroundColor: "#ffffff" }}>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "black",
                  paddingHorizontal: 20,
                  backgroundColor: "#ffffff"
                }}
              >
                Top Employers
              </Text>

              <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <HomeTop
                    imageUri={require("../images/Ncell.png")}
                    name="Ncell"
                  />
                  <HomeTop
                    imageUri={require("../images/sangrila.jpg")}
                    name="Hotel Sangrila"
                  />
                  <HomeTop
                    imageUri={require("../images/jica.jpg")}
                    name="Jica"
                  />
                  <HomeTop imageUri={require("../images/zte.jpg")} name="ZTE" />
                </ScrollView>
              </View>
            </View>

            <View>
              <FlatList
                data={this.state.firebaseData}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* <View
              style={{ padding: 20, marginTop: 20, backgroundColor: "#ffffff" }}
            >
              <Post
                imageUri={require("../images/sanjay.jpg")}
                name="Yuzan Khadka"
              />
              <View style={{ flex: 1 }}>
                <Post1 imageUri={require("../images/vacancy.jpg")} />
              </View>
            </View>

            <View
              style={{ padding: 20, marginTop: 20, backgroundColor: "#ffffff" }}
            >
              <Post
                imageUri={require("../images/pratham.jpg")}
                name="Floyd Thakuri"
              />
              <View style={{ flex: 1 }}>
                <Post1 imageUri={require("../images/vacancy2.jpg")} />
              </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeeeee",
    flex: 1,
    paddingTop: 20
  }
});
