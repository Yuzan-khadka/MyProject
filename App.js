import React, {Component} from 'react';
import {
   Text,
   View,
   StyleSheet,
 }  from 'react-native';

import Navigation from './src/route/Navigation';
import Loading from './src/components/Loading';
 
import * as firebase from 'firebase'; 
import {createAppContainer,createSwitchNavigator } from 'react-navigation';
import OptionMenu from './src/components/OptionMenu';

const firebaseConfig = {
    apiKey: "AIzaSyBlhaXPpv02tzwKzF-qajmHRNWLyLG6BsE",
    authDomain: "gethired-324f4.firebaseapp.com",
    databaseURL: "https://gethired-324f4.firebaseio.com",
    projectId: "gethired-324f4",
    storageBucket: "gethired-324f4.appspot.com",
   
 }

 firebase.initializeApp(firebaseConfig);

 

 export default class App extends Component {
   
   render(){
     return(   
       <Loading />
     );
   }
 }
 /*const SwitchNavigator = createSwitchNavigator({
           Loading: Loading,
           Navigation: Navigation,
     
 },
           {
               initialRouteName: 'Loading'
           })
           const AppSwitchNavigator = createAppContainer(SwitchNavigator)*/