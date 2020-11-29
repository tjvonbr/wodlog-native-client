import React, { useState } from 'react'
import axios from 'axios'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AddWorkoutModal from '../components/AddWorkoutModal'
import TransparentView from '../components/TransparentView'
import EStyleSheet from 'react-native-extended-stylesheet'
import * as firebase from 'firebase'

const Dashboard = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [workout, setWorkout] = useState(null)

  /* Toggling modal visibility */
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

  /* Add workout and open modal */
  const addWorkout =  async () => {
    try {
      const res = axios.post('http://192.168.1.174:3000/wods')
      setWorkout(res.data)
      navigation.navigate('Add Workout')
    }
    catch(err) {
      console.log(err)
    }
  }

  /* 
    Signout and clear local storage 
    TODO: move to AuthProvider file
  */
  const signOut = () => firebase.auth().signOut()
    .then(AsyncStorage.clear())
    .catch(err => console.log('ERROR', err))

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.header}>Welcome!</Text>
      <View style={styles.workoutWrapper}>
        <TouchableOpacity
          style={styles.addWorkout}
          onPress={addWorkout}
        >
          <Text>Add Workout</Text>
        </TouchableOpacity>
      </View>

      <View>
        <AddWorkoutModal
          visible={isVisible}
          handleClose={hideModal}
          workout={workout}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '90%',
    marginTop: '3%',
    fontSize: '1.6rem',
    fontWeight: '600',
  },
  workoutWrapper: {
    width: '100%',
  },
  addWorkout: {
    height: '10rem',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    shadowColor: '$lightgray',
    backgroundColor: '#869add',
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 2,
    shadowOpacity: 1
  }
})

export default Dashboard;
