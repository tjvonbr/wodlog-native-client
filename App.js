import React, { useState } from 'react';
import * as firebase from 'firebase';
import BoxCalendar from './views/BoxCalendar';
import Dashboard from './views/Dashboard';
import Exercises from './views/Exercises';
import History from './views/History';
import { Provider } from 'react-redux';
import RegisterUser from './views/RegisterUser';
import SignIn from './views/SignIn';
import Splash from './views/Splash';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let { width } = Dimensions.get('window')

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
  const [signedIn, setSignedIn] = useState(false);

  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig)
  }

  /* Observer set on the firebase auth object */
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setSignedIn(true);
      setIsLoading(false);
    } else {
      setSignedIn(false);
    }
  })

  if (isLoading) {
    return <Splash />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {signedIn ? (
          <Tab.Navigator
            initialRouteName='Dashboard'
            tabBarOptions={{
              activeBackgroundColor: '#ffffff',
              inactiveBackgroundColor: '#ffffff',
              activeTintColor: '#de4ea8',
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'History') {
                  iconName = 'history'
                  size = 22
                } else if (route.name === 'Exercises') {
                  iconName = 'dumbbell'
                  size = 22
                } else if (route.name === 'Dashboard') {
                  iconName = 'home'
                  size = 22
                } else if (route.name === 'Calendar') {
                  iconName = 'calendar-alt'
                  size = 22
                } 
                return <FontAwesome5 name={iconName} size={size} color={color} />
              },
            })}
          >
            <Tab.Screen name='Calendar' component={BoxCalendar} />
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
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Register' component={RegisterUser} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
