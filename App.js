// In App.js in a new project

import * as React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import ImagePick from './src/screens/ImagePiker';
import CameraView from './src/screens/Camera';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import Status from './src/screens/Status';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Image" component={ImagePick}/>
            <Stack.Screen name ="camera" component={CameraView}/>
            <Stack.Screen name ="Status" component={Status}/>
          </Stack.Navigator>
          
      </NavigationContainer>
      </Provider>
    
  );
}



export default App;

const styles = StyleSheet.create({
    btn:{
      width:300,
      height:60,
      borderWidth:4,
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#2980b9"
    },Text:{
      fontSize:25,
      color:"white",
      fontWeight:"bold"
    }
})