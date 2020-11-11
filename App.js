import React, { useEffect, useState } from 'react';
import Dashboard from './views/Dashboard';
import Exercises from './views/Exercises';
import History from './views/History';
import RegisterUser from './views/RegisterUser';
import SignIn from './views/SignIn';
import Splash from './views/Splash';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import * as firebase from 'firebase'
import ApiKeys from './constants/ApiKeys';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let {height, width} = Dimensions.get('window')

EStyleSheet.build({
  $white: '#fff',
  $lightgray: '#dad9e1',
  $black: '#000000',
  $steel: '#4682B4',
  $mint: '#3ad9a2',
  $rem: width > 340 ? 18 : 16
})

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })
  })

  if (isLoading) {
    return <Splash />
  }

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          initialRouteName='Dashboard'
          tabBarOptions={{
            activeBackgroundColor: '#ffffff',
            inactiveBackgroundColor: '#ffffff',
            activeTintColor: '#de4ea8',
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'History') {
                iconName = 'history'
                size = 22
                color: 'lightgray'
              } else if (route.name === 'Exercises') {
                iconName = 'dumbbell'
                size = 22
              } else if (route.name === 'Dashboard') {
                iconName = 'home'
                size = 22
              } 
              return <FontAwesome5 name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name='History' component={History} />
          <Tab.Screen name='Dashboard' component={Dashboard} />
          <Tab.Screen name='Exercises' component={Exercises} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator 
          initialRouteName='SignIn'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='SignIn'component={SignIn} />
          <Stack.Screen name='Register'component={RegisterUser} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
