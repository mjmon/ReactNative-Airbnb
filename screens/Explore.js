
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'


const {height, width} = Dimensions.get('window')
class Explore extends Component{

   componentDidMount() {
      this.startHeaderHeight = 120
      if(Platform.OS == 'android') {
         this.startHeaderHeight = 100 + StatusBar.currentHeight
      }
   }

	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
               <View style={{height: this.startHeaderHeight,
                  borderBottomWidth: 1, borderBottomColor: '#dddddd',
                  paddingBottom: 25}}>
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
               
               <ScrollView scrollEventThrottle={16} style={{backgroundColor: 'teal'}}> 
                  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                     <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        What can we help you find, James?
                     </Text>
                     {/* Sliders */}
                     <View style={{height: 130, marginTop: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                           <Category
                              imageUri={require('../assets/home.jpg')}
                              name='Home'/>
                           <Category
                              imageUri={require('../assets/experiences.jpg')}
                              name='Experiences'/>
                           <Category
                              imageUri={require('../assets/restaurant.jpg')}
                              name='Restaurant'/>                           
                        </ScrollView>
                     </View>
                     {/* Introducing Airbnb Plus */}
                     <View style={{marginTop: 40, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 24, fontWeight: '700'}}>
                           Introducing Airbnb Plus
                        </Text>
                        <Text style={{fontWeight: '100', marginTop: 10}}>
                           A new selection of homes verified for quality & comfort
                        </Text>
                        <View style={{width: width - 40, height: 200, marginTop: 20}}>
                           <Image
                              source={require('../assets/home.jpg')}
                              style={{flex: 1, height: null, width: null, 
                              resizeMode: 'cover', borderRadius: 5, 
                              borderWidth: 1, borderColor:'#dddddd'}}/>
                        </View>
                     </View>
                     {/* Homes around the world */}
                     <View style={{marginTop: 40, backgroundColor: 'orange'}}>
                        <Text style={{fontSize: 24, fontWeight: '700'}}>
                           Homes around the world
                        </Text>
                        <View style={{paddingHorizontal: 20, marginTop: 20}}>
                           <View style={{width: width/2, height: width/2}}>
                              <View style={{flex: 1, backgroundColor: 'yellow'}}>
                              </View>
                              <View style={{flex: 1, backgroundColor: 'red'}}>
                              </View>
                           </View>
                        </View>
                     </View> 
                  </View>
               </ScrollView>

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