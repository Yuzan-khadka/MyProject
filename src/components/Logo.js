import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        StatusBar,
        Image,

      } from 'react-native';

      export default class Logo extends Component{
          render(){
              return(
                <View style={styles.container}>
                    <Image style={{width:150, height:120}} source = {require('../images/GetHiredLogo1.jpg')}/>
                </View>
              );
          }
        }
        const styles = StyleSheet.create({
            container: {
              //marginVertical: 10,
              flexGrow:1,
              alignItems: 'center',
              justifyContent: 'flex-end',
             
            }
          });