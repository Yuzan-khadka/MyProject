import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import Navigation from '../route/Navigation';
export default class Loading extends React.Component {
     constructor(props){
         super(props)
      this.state=({
        animating: true,
         }) 
        }


        componentDidMount = () =>{ 
            setTimeout(() =>this.setState({animating: false}), 5000)}
    
  render() {

    if (this.state.animating){
      return(
        <View style={styles.container}>
          <Text style={{fontSize:18, fontWeight:'bold', color:'green'}}>Loading</Text>
          <ActivityIndicator size="large" animating={this.state.animating}/>
          </View>)
    }
    else{
      return(
        <Navigation/>
      )
    }
    
    // return (
        
    //   <View style={styles.container}>
    //       {
    //       this.state.animating ? 
                 
          
    //     <ActivityIndicator size="large" animating={this.state.animating}/>
    //         :
              
    //             <Navigation/>
               
    //         }
    //   </View>
    // )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    container1: {
      backgroundColor: '#ffffff',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',

    }
  });
  
