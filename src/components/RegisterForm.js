import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
// import * as firebase from "firebase";
import firebase from "./firebase";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FName: "",
      LName: "",
      email: "",
      password: "",
      rePassword: ""
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);

      this.saveExtra();
      // alert('User registered successfully');
    } catch (error) {
      console.log(error.toString());
    }
  };

  saveExtra = () => {
    firebase
      .database()
      .ref("UsersDetail/")
      .push({
        FName: this.state.FName,
        LName: this.state.LName,
        email: this.state.email
      })
      .then(data => {
        //success callback
        Alert.alert("Users Data saved Successfully!");
        // this.props.onLoginPress.navigate("Login");

        console.log("data ", data);
        this.setState({
          FName: "",
          LName: "",
          email: "",
          password: "",
          rePassword: ""
        });
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="First Name"
          placeholderTextColor="#777777"
          onSubmitEditing={() => this.LName.focus()}
          onChangeText={FName => this.setState({ FName })}
          value={this.state.FName}
        />
        <TextInput
          style={styles.passBox}
          placeholder="LastName"
          placeholderTextColor="#777777"
          ref={input => (this.LName = input)}
          onSubmitEditing={() => this.email.focus()}
          onChangeText={LName => this.setState({ LName })}
          value={this.state.LName}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Email"
          placeholderTextColor="#777777"
          ref={input => (this.email = input)}
          onSubmitEditing={() => this.password.focus()}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Create New Password"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          ref={input => (this.password = input)}
          onSubmitEditing={() => this.repassword.focus()}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Confirm Password"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          ref={input => (this.repassword = input)}
          onChangeText={rePassword => this.setState({ rePassword })}
          value={this.state.rePassword}
        />
        <View style={[{ width: 230, margin: 10 }]}>
          <Button
            title="Register"
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 230,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    paddingHorizontal: 15,
    //marginVertical: 20,
    //textAlign: 'center',
    fontSize: 16,
    color: "#777777"
  },
  passBox: {
    width: 230,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    paddingHorizontal: 15,
    marginVertical: 10,
    //textAlign: 'center',
    fontSize: 16,
    color: "#777777"
  }
});
