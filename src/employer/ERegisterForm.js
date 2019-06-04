import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity,

      } from 'react-native';

      export default class RegisterForm extends Component{
          render(){
              return(
                <View style={styles.container}>
                    <TextInput style={styles.inputBox} 
                               placeholder='Organization Name' 
                               placeholderTextColor='#777777'
                               />
                    <TextInput style={styles.passBox} 
                               placeholder='Organization Contact No.' 
                               placeholderTextColor='#777777'
                               />
                    <TextInput style={styles.passBox} 
                               placeholder='UserName' 
                               placeholderTextColor='#777777'
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Email' 
                               placeholderTextColor='#777777'
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Create New Password' 
                               placeholderTextColor='#777777'
                               secureTextEntry={true}
                              />
                    <TextInput style={styles.passBox} 
                               placeholder='Confirm Password' 
                               placeholderTextColor='#777777'
                               secureTextEntry={true}
                              />
                    <View style={[{width:230, margin:10}]}>
                    <Button  title='Register'/>
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