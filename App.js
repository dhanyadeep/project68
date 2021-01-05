import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import faceBookScreen from './screens/in';
import instaScreen from './screens/fb';


export default function App() {
  return (
   <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Instagram:{screen:faceBookScreen},
  FaceBook:{screen:instaScreen}
})
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
