
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class Explore extends Component{

   componentWillMount() {
      this.startHeaderHeight = 80
      if(Platform.OS == 'android') {
         this.startHeaderHeight = 100 + StatusBar.currentHeight
      }
   }

	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
            <View style={{height: this.startHeaderHeight, backgroundColor: 'white',
              borderBottomWidth: 1, borderBottomColor: '#dddddd'
            }}>
               <View style={{
                  flexDirection: 'row', height: 50, alignItems: 'center', 
                  padding: 10, marginHorizontal: 20, backgroundColor: 'white',
                  shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.2, //for ios
                  elevation: 3, //for android
                  marginTop: Platform.OS == 'android'? 30: null
               }}>
                  <Icon name='ios-search' size={20}/>
                  <TextInput
                     placeholderTextColor='grey'
                     placeholder='Try Cebu City' 
                     style={{height: 50, flex: 1, fontWeight: '200', marginHorizontal: 5}}/>
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