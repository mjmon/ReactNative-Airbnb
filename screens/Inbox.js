
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Inbox extends Component{
	render() {
		return (
			<View style={styles.container}>
				<Text>Inbox</Text>
			</View>
		)
	}
}

export default Inbox

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})