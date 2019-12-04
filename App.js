/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import Profile from './screens/Profile'

class App extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello Worldss</Text>
			</View>
		)
	}
}

const TabNavigator = createBottomTabNavigator({
   Explore: {
      screen: Explore,
      navigationOptions: {
         tabBarLabel: 'EXPLORE',
         tabBarIcon: ({tintColor}) => (
            <Icon name="ios-search" color={tintColor} size={24}/>
         )
      }
   },
   Saved: {
      screen: Saved,
      navigationOptions: {
         tabBarLabel: 'SAVED',
         tabBarIcon: ({tintColor}) => (
            <Icon name="ios-heart-empty" color={tintColor} size={24}/>
         )
      }
   },
   Trips: {
      screen: Trips,
      navigationOptions: {
         tabBarLabel: 'TRIPS',
         tabBarIcon: ({tintColor}) => (
            <Image source={require('./assets/airbnb.png')} style={{height: 24, width:24, tintColor: tintColor}}/>
         )
      }
   },
   Inbox: {
      screen: Inbox,
      navigationOptions: {
         tabBarLabel: 'INBOX',
         tabBarIcon: ({tintColor}) => (
            <Icon name="ios-chatboxes" color={tintColor} size={24}/>
         )
      }
   },
   Profile: {
      screen: Profile,
      navigationOptions: {
         tabBarLabel: 'PROFILE',
         tabBarIcon: ({tintColor}) => (
            <Icon name="ios-person" color={tintColor} size={24}/>
         )
      }
   }
})

export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})