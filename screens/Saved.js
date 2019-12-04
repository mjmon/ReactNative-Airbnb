
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Saved extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Saved</Text>
			</View>
		)
	}
}

export default Saved

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})