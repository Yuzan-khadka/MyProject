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

import * as firebase from "firebase";
//import { withNavigation } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

const myIcon1 = <Icon name="person" size={30} color="#2289ff" />;
const myIcon2 = <Icon name="lock" size={30} color="#2289ff" />;

export default class EForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser = (email, password) => {
    try {
      if (this.state.email == "" || this.state.password == "") {
        alert("Empty Fields!!");
        return;
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({
            email: "",
            password: "",
            showLoading: false,
            error: ""
          });

          this.props.onLoginPress.navigate("EMainApp");

          this.setState({
            email: "",
            password: ""
          });
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          {myIcon1}
          <TextInput
            style={styles.inputBox}
            placeholder="Username/Email"
            placeholderTextColor="#777777"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.icon}>
          {myIcon2}
          <TextInput
            style={styles.passBox}
            placeholder="Password"
            placeholderTextColor="#777777"
            secureTextEntry={true}
            ref={input => (this.password = input)}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={[{ width: 280, margin: 10 }]}>
          <Button
            title="Log In"
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          />
          {/* <Button
            title="Log In"
            onPress={() => this.props.onLoginPress.navigate("EMainApp")}
          />*/}
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: "red",
              textDecorationLine: "underline",
              marginTop: 10
            }}
          >
            Forgot a password?
          </Text>
        </TouchableOpacity>
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
    width: 240,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    paddingHorizontal: 15,
    //marginVertical: 20,
    //textAlign: 'center',
    fontSize: 16,
    color: "#777777"
  },
  passBox: {
    width: 240,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    paddingHorizontal: 15,
    marginVertical: 10,
    //textAlign: 'center',
    fontSize: 16,
    color: "#777777"
  },
  icon: {
    flexDirection: "row",
    alignItems: "center"
  }
});

// export default withNavigation(Form);
