import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity,
        Alert

      } from 'react-native';
import * as firebase from 'firebase';

     export default class RegisterForm extends Component{
        constructor(props){
          super(props)

          this.state = ({
            FName: '',
            LName: '',
            email: '',
            password: '',
            rePassword: '',
          })
        } 

        signUpUser = (email,password) => {
          try {
            if(this.state.password.length<6){
              alert('Please enter atleast 6 characters')
              return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password);
            this.saveToDatabase();
            alert('User registered successfully');
            this.props.onLoginPress.navigate('Home');
          }
          catch (error) {
           console.log(error.toString())
         }
        
         saveToDatabase=()=>{
          firebase.database().ref('CustomerList/').push({
            FirstName: this.state.FName,
            LastName: this.state.LName,
            Email:this.state.email,
            Password: this.state.password,
            RePassword:this.state.rePassword,
         
          })
          



         }

       }
          render(){
              return(
                <View style={styles.container}>
                    <TextInput style={styles.inputBox} 
                               placeholder='First Name' 
                               placeholderTextColor='#777777'
                               onSubmitEditing= {() => this.LName.focus()}
                               onChangeText = {(FName) => this.setState({FName})}
                               />
                    <TextInput style={styles.passBox} 
                               placeholder='LastName' 
                               placeholderTextColor='#777777'
                               ref={(input) => this.LName = input}
                               onSubmitEditing= {() => this.email.focus()}
                               onChangeText = {(LName) => this.setState({LName})}
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Email' 
                               placeholderTextColor='#777777'
                               ref={(input) => this.email = input}
                               onSubmitEditing= {() => this.password.focus()}
                               onChangeText = {(email) => this.setState({email})}
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Create New Password' 
                               placeholderTextColor='#777777'
                               secureTextEntry={true}
                               ref={(input) => this.password = input}
                               onSubmitEditing= {() => this.repassword.focus()}
                               onChangeText = {(password) => this.setState({password})}
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Confirm Password' 
                               placeholderTextColor='#777777'
                               secureTextEntry={true}
                               ref={(input) => this.repassword = input}
                               onChangeText = {(rePassword) => this.setState({rePassword})}
                              />
                    <View style={[{width:230, margin:10}]}>
                    <Button  title='Register' onPress={() => this.signUpUser(this.state.email,this.state.password)}/>
                    </View>
                    
                    
                </View>
              );
          }
        }
        const styles = StyleSheet.create({
            container: {
              
              flexGrow:1,
              alignItems: 'center',
              justifyContent: 'center',
             
            },
            inputBox: {
                width: 230,
                borderBottomWidth: 2,
                borderBottomColor: 'green',
                paddingHorizontal: 15,
                //marginVertical: 20,
                //textAlign: 'center',
                fontSize: 16,
                color: '#777777'

            },
            passBox: {
                width: 230,
                borderBottomWidth: 2,
                borderBottomColor: 'green',
                paddingHorizontal: 15,
                marginVertical: 10,
                //textAlign: 'center',
                fontSize: 16,
                color: '#777777'
            },
           
          });