import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, BackHandler } from "react-native";
import { SearchBar } from "react-native-elements";
//import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import * as firebase from "firebase";
import Icon from "react-native-vector-icons/MaterialIcons";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ELogin from "../employer/ELogin";
import ERegister from "../employer/ERegister";
import EMainApp from "../employer/EMainApp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Categories from "../pages/Categories";
import DrawerContent from "../components/DrawerContent";
import OptionMenu from "../components/OptionMenu";
import StartupScreen from "../employer/StartupScreen";
import StartPage from "../pages/StartPage";

import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

export default class Navigation extends Component {
  
  render() {
    return <AppContainer onButtonPress={this.props.navigation} />;
  }
}
const DashBoardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Dashboard,
      title: "Home",
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" size={25} color={tintColor} />
        )
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="notifications" size={25} color={tintColor} />
        )
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="apps" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",

    //For MaterialBottomTabNavigator
    /*order: ['Home', 'Profile','Notifications'],
      activeColor: 'green',
      inactiveColor: '#888888',
      barStyle: { backgroundColor: '#ffffff' },*/
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "#888888",
      labelStyle: {
        fontSize: 8
      },
      style: {
        backgroundColor: "#ffffff"
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  }
);
DashBoardTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  return {
    headerTitle: routeName,
    headerTitleStyle: {
      color: "white",
      fontSize: 20,
      marginHorizontal: 35
    }
  };
};

const DashboardStack = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashBoardTabNavigator
    }
  },

  {
    defaultNavigationOptions: props => {
      _menu = null;

      setMenuRef = ref => {
        this._menu = ref;
      };

      hideMenu = () => {
        this._menu.hide();
      };

      showMenu = () => {
        this._menu.show();
      };
      signUserOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("Logged out....");
            this.hideMenu();
            props.navigation.navigate("StartPage");
          })
          .catch(error => {
            console.log("error", error);
          });
      };
      // employer = () => {
      //   this._menu.hide();
      //   props.navigation.navigate("EmployerZone");
      // };
      onExit = () => {
        this._menu.hide();
        Alert.alert("Exit", "Are you sure?", [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => props.navigation.goBack(null) }
        ]);
      };

      return {
        headerRight: (
          <View>
            <Menu
              ref={this.setMenuRef}
              button={
                <Icon
                  name="more-vert"
                  color="white"
                  size={25}
                  style={{ padding: 10 }}
                  onPress={this.showMenu}
                />
              }
            >
              <MenuItem onPress={this.hideMenu}>Setting</MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>About_Us</MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.signUserOut}>Logout</MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.onExit}>Exit</MenuItem>
            </Menu>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#42a803"
        }
      };
    }
  }
);

const AppSwitchNavigator = createStackNavigator(
  {
    StartPage: StartPage,
    LogIn: Login,
    SignUp: Register,
    MainApp: DashboardStack,

    EmployerZone: {
      screen: createStackNavigator(
        {
          StartupScreen: StartupScreen,
          ELogIn: ELogin,
          ESignup: ERegister,
          EMainApp: EMainApp
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        }
      )
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    LogIn: Login,
    SignUp: {
      screen: Register
    },
    MainApp: DashboardStack,
    EmployerZone: {
      screen: createStackNavigator(
        {
          StartupScreen: StartupScreen,
          ELogIn: ELogin,
          ESignup: ERegister,
          EMainApp: EMainApp
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        }
      )
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    /*Home: {
            screen: DashboardStack,
          },
          
          Settings:{
              screen: Profile,
          },

          Logout:{
            screen: Profile,
          },

          About_Us:{
            screen: Profile,
          },*/
    Login: { screen: AppSwitchNavigator },

    Login1: { screen: AppStackNavigator }
  },

  {
    contentComponent: props => <DrawerContent {...props} />
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
