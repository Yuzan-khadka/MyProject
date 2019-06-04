import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Notifications extends Component{
    render(){
    return(
       <View style={styles.container}>
           <Text style={{fontWeight:'bold' , color:'#777777', fontSize: 16}}>You must be logged in to see notifications.</Text>
       </View>
    );
}
}

const styles= StyleSheet.create({
    container:{
    backgroundColor: '#ffffff',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    }
}

);