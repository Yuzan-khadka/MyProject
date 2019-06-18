import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Picker,
  Image
} from "react-native";
import Modal from "react-native-modalbox";
import Button from "react-native-button";
import ImagePicker from "react-native-image-picker";
// import RNFetchBlob from "react-native-fetch-blob";

import firebase from "../components/firebase";

const screen = Dimensions.get("window");

export default class EDashboard extends Component {
 
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      isLoading: false,
      jobTitle: "",
      jobDescription: "",
      jobType: [],
      image: [],
      photo: null,
      uri: null
    };
  }
  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("response", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          photo: source,
          photoUri: response.uri
        });
      }
    });
  };
  savePost = () => {
    if (this.state.jobTitle == "" || this.state.jobDescription == "") {
      alert("You cannot leave empty fields!!");
      return;
    }
    this.setState({ isLoading: true });

    firebase
      .database()
      .ref("Post/")
      .push({
        JobTitle: this.state.jobTitle,
        JobDescription: this.state.jobDescription,
        JobType: this.state.jobType,
        
      })

      .then(data => {
        //success callback
        alert("Job Posted Successfully!");

        this.props.navigation.navigate("Home");
        // this.textInput.clear();
        console.log("data ", data);
        this.setState({
          jobTitle: "",
          jobDescription: "",
          jobType: [],
          photo: null,
          isLoading: false
        });
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  };

  saveImage = () => {
    firebase
      .storage()
      .ref("images/")
      .put(this.state.photo);
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#dddddd" }}>
        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"}
          isDisabled={this.state.isDisabled}
        >
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "900", textAlign: "center" }}
            >
              Post Job
            </Text>
          </View>
          <ScrollView style={{ backgroundColor: "#dddddd" }}>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                  marginBottom: 20
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.jobText}>Job Title:</Text>
                  <TextInput
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => this.description.focus()}
                    onChangeText={jobTitle => this.setState({ jobTitle })}
                    value={this.state.jobTitle}
                    style={{
                      borderBottomWidth: 2,
                      width: 180,
                      height: 40,
                      borderBottomColor: "#777777",
                      marginLeft: 15
                    }}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", marginTop: 10, padding: 10 }}
                >
                  <Text style={styles.jobText}>Description:</Text>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    numberOfLines={10}
                    multiline={true}
                    //onSubmitEditing={() => this.jobtype.focus()}
                    onChangeText={jobDescription =>
                      this.setState({ jobDescription })
                    }
                    ref={input => (this.description = input)}
                    value={this.state.jobDescription}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", marginTop: 7, padding: 7 }}
                >
                  <Text style={styles.jobText}>Job Type:</Text>
                  <View
                    style={{
                      borderWidth: 2,
                      width: 180,
                      height: 27,
                      borderColor: "#777777",
                      marginTop: 12,
                      marginLeft: 15
                    }}
                  >
                    <Picker
                      style={{
                        width: 180,
                        height: 27
                      }}
                      ref={input => (this.jobtype = input)}
                      selectedValue={this.state.jobType}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ jobType: itemValue })
                      }
                    >
                      <Picker.Item
                        label="Architecture and Construction"
                        value="Architecture and Construction"
                      />
                      <Picker.Item
                        label="Business Management and Administration"
                        value="Business Management and Administration"
                      />
                      <Picker.Item
                        label="Education and Training"
                        value="Education and Training"
                      />
                      <Picker.Item
                        label="Hospitality and Tourism"
                        value="Hospitality and Tourism"
                      />
                      <Picker.Item
                        label="Information Technology"
                        value="Information Technology"
                      />
                      <Picker.Item
                        label="Manufacturing"
                        value="manufacturing"
                      />
                      <Picker.Item
                        label="Marketing, Sales and Service"
                        value="Marketing, Sales and Service"
                      />
                      <Picker.Item
                        label="Transportation, Distribution and Logistics"
                        value="Transportation, Distribution and Logistics"
                      />
                    </Picker>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "row", marginTop: 7, padding: 7 }}
                >
                  <Text style={styles.jobText}>Upload a File:</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChoosePhoto();
                    }}
                  >
                    {photo && (
                      <Image
                        source={this.state.photo}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <View
                      style={{
                        borderWidth: 2,
                        width: 180,
                        height: 27,
                        borderColor: "#777777",
                        marginTop: 12,
                        marginRight: 10
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>
                        Choose a photo...
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.savePost()}>
                  <View
                    style={{
                      backgroundColor: "#42a803",
                      paddingHorizontal: 14,
                      marginTop: 10,
                      height: 40
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 20,
                        fontWeight: "200",
                        color: "#ffffff"
                      }}
                    >
                      Post
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </Modal>

        <StatusBar backgroundColor="#296802" />

        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 10, height: 200 }}>
            <ImageBackground
              source={require("../images/worker.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            />
            <View
              style={{
                position: "absolute",

                justifyContent: "flex-end"
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  marginTop: 20,
                  paddingHorizontal: 15,
                  fontWeight: "700",
                  marginLeft: 8
                }}
              >
                Find & Hire Freelancers
              </Text>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  marginTop: 5,
                  paddingHorizontal: 15,
                  fontWeight: "400",
                  marginLeft: 8
                }}
              >
                GetHired makes it easy for quality employers and freelancers to
                connect.
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
                marginBottom: 50
              }}
            >
              <Button
                onPress={() => this.refs.modal3.open()}
                style={styles.btn}
              >
                Post a free Job
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modal: {
    height: 500,
    width: screen.width - 40
  },
  jobText: {
    textAlign: "center",
    padding: 15,
    fontSize: 16,
    fontWeight: "bold"
  },
  textArea: {
    width: 180,
    height: 100,
    textAlignVertical: "top",
    borderWidth: 2,
    borderColor: "#777777",
    padding: 15,
    marginVertical: 15
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B599899",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }
});
//const styles = StyleSheet.create({

//   textAreaContainer: {
//     borderColor: "lightgrey",
//     borderWidth: 2,
//     paddingHorizontal: 15,
//     marginTop: 15,
//     marginLeft: 10,
//     marginRight: 10,
//     textAlignVertical: "top"
//   },
//   textArea: {
//     height: 150,
//     textAlignVertical: "top"
//   }
//});
{
  /* <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#ffffff",
                    backgroundColor: "#29680280",
                    borderWidth: 2,
                    textAlign: "center"
                  }}
                >
                  Post a free Job
                </Text>
              </TouchableOpacity> */
}
{
  /* <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="#bbbbbb"
              numberOfLines={10}
              multiline={true}
              onChangeText={postJob => this.setState({ postJob })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.postJob}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
            <TouchableOpacity onPress={() => this.savePost()}>
              <View
                style={{
                  backgroundColor: "#42a803",
                  paddingHorizontal: 14,
                  marginTop: 10,
                  height: 40
                }}
              >
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    fontWeight: "200",
                    color: "#ffffff"
                  }}
                >
                  Post
                </Text>
              </View>
            </TouchableOpacity>
          </View> */
}
