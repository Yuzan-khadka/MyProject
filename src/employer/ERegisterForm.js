import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import firebase from "../components/firebase";
export default class ERegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      OName: "",
      ONum: "",
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
      .ref("EmployerDetail/")
      .push({
        OrganizationName: this.state.OName,
        OrganizationNumber: this.state.ONum,
        email: this.state.email
      })
      .then(data => {
        //success callback
        Alert.alert("Employers Data saved Successfully!");
        // this.props.onLoginPress.navigate("ELogin");

        console.log("data ", data);
        this.setState ({
          OName: "",
          ONum: "",
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
          placeholder="Organization Name"
          placeholderTextColor="#777777"
          onChangeText={OName => this.setState({ OName })}
          value={this.state.OName}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Organization Contact No."
          placeholderTextColor="#777777"
          onChangeText={ONum => this.setState({ ONum })}
          value={this.state.ONum}
        />

        <TextInput
          style={styles.passBox}
          placeholder="Email"
          placeholderTextColor="#777777"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Create New Password"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          style={styles.passBox}
          placeholder="Confirm Password"
          placeholderTextColor="#777777"
          secureTextEntry={true}
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
