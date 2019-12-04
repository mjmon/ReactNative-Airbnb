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
  Text
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'

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
      screen: Explore
   },
   Saved: {
      screen: Saved
   },
   Trips: {
      screen: Trips
   },
   Inbox: {
      screen: Inbox
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