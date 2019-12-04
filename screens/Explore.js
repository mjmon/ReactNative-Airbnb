
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Explore extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Explore</Text>
			</View>
		)
	}
}

export default Explore

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})