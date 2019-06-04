import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Categories extends Component{
    
    render(){
    return(
       <View style={styles.container}>
           <Text style={{fontWeight:'bold' , color:'#777777', fontSize: 16}}>Proffesional</Text>
           <Text style={{fontWeight:'bold' , color:'#777777', fontSize: 16}}>UnProffesional</Text>

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