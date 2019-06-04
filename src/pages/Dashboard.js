import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        StatusBar
        } from 'react-native';


export default class Dashboard extends Component{
    
     render(){
         return(
              <View style={styles.container}>
                <StatusBar backgroundColor='#296802'/>
              <Text style={{fontWeight:'bold' , color:'#777777', fontSize: 18}}>Welcome To Home Screen.</Text>
              </View>
         );
     }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',

    }
  });