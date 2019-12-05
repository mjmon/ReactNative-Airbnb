
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class Explore extends Component{
	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
            <View style={{height: 80, backgroundColor: 'white'}}>
               <View style={{
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  padding: 10,
                  marginHorizontal: 20
               }}>
                  <Icon name='ios-search' size={20}/>
                  <TextInput
                     placeholderTextColor='grey'
                     placeholder='Try Cebu City' 
                     style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}/>
               </View>
            </View>
         </SafeAreaView>
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