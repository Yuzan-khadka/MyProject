import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import ImagePicker from "react-native-image-picker";

import * as firebase from "firebase";

export default class Categories extends Component {
  findNewImage = () => {
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
         
       
          this.setState({
            uri: response.uri
          });
          
      }
    });
  };

  uploadImage = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref("users/")
      .child("images/");
    return ref.put(blob);
  };
  uploadPhoto =() =>{
      this.uploadImage(this.state.uri);
      alert('Success');
  }

  render() {
     
    return (
      <View style={styles.container}>
      <TouchableOpacity
          onPress={() => this.findNewImage()}
          style={{ backgroundColor: "blue", padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Choose Image
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => this.uploadPhoto()}
          style={{ backgroundColor: "blue", padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
