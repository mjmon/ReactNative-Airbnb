
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Trips extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Trips</Text>
			</View>
		)
	}
}

export default Trips

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})