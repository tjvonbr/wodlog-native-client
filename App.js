import React from 'react';
import RegisterOwner from './views/RegisterOwner';
import SignIn from './views/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const Stack = createStackNavigator();
let {height, width} = Dimensions.get('window')

EStyleSheet.build({
  $white: '#fff',
  $lightgray: '#dad9e1',
  $black: '#000000',
  $steel: '#4682B4',
  $rem: width > 340 ? 18 : 16
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SignIn'
      >
        <Stack.Screen 
          name='SignIn'
          component={SignIn}
        />
        <Stack.Screen 
          name='Register'
          component={RegisterOwner}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
