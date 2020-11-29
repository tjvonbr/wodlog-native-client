import React from 'react'
import AddWorkout from './AddWorkout'
import Dashboard from './Dashboard'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AddWod = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Add Workout" component={AddWorkout} />
    </Stack.Navigator>
  )
}

export default AddWod
