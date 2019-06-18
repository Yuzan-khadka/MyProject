import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, BackHandler } from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import EDashboard from "./EDashboard";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Categories from "../pages/Categories";

import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

export default class EMainApp extends Component {
  render() {
    return <AppContainer onButtonPress={this.props.navigation} />;
  }
}
const DashBoardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: props => <EDashboard {...props} />,
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

const EDashboardStack = createStackNavigator(
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
              <MenuItem onPress={this.hideMenu}>Logout</MenuItem>
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
const AppContainer = createAppContainer(EDashboardStack);
