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

import {createBottomTabNavigator} from 'react-navigation'


export default class App extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello Worldss</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})