import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        StatusBar,
        Image,
        Button,
        

      } from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/Form';


      export default class Login extends Component{
         static navigationOptions = {
           header:null,
         };
        render(){
          return(
              <View style={styles.container}>
                <Logo/>
                <Form onLoginPress={this.props.navigation}/>
                <View style={styles.signup}>
                    <Text>New to GetHired?</Text>
                    <Button  title='Get Started' onPress={() => this.props.navigation.navigate('SignUp')}/>
                </View>
              </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#ffffff',
          flexGrow:1,
          alignItems: 'center',
          justifyContent: 'center',

        },
        signup:{
         
          flexGrow:1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }
      });