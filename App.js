import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import HelpScreen from './screens/Help';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  MainScreen: MainScreen,
  HelpScreen: HelpScreen,
  
});

const AppContainer =  createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
