import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        Button

        } from 'react-native';


export default class Dashboard extends Component{
    
     
     render(){
         return(
              <View style={styles.container}>
               <View>
                    <View style={{width: 150}}>
               <Button title='Log In' color='#06a30e' onPress= {() => this.props.navigation.navigate('LogIn')}/>
                    </View>
              <Text style={styles.text}>To see your profile</Text>
              </View>
              <View style={styles.lowerPart}>
                   <View style={{width: 150}}> 
              <Button title='Sign Up' color='#06a30e' onPress={() => this.props.navigation.navigate('SignUp')}/>
                   </View>
              <Text style={styles.text}>To create your profile</Text>
              </View>
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

    },
    button:{
         color: '#06a30e'
    },
    text:{
         color:'#777777', 
         fontSize: 14, 
         textAlign:'center'   
    },
    lowerPart:{
         padding: 50
    }
  });