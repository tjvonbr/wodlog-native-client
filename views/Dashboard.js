import React, { useState } from 'react';
import axios from 'axios';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddWorkoutModal from '../components/AddWorkoutModal';
import GradientView from '../components/LinearGradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [workout, setWorkout] = useState(null);

  /* Toggling modal visibility */
  const showModal = () => setModalVisible(true);

  const hideModal = () => {
    setModalVisible(false);
  }

  /* Add workout and open modal */
  const addWorkout = () => {
    return axios.post('http://192.168.1.174:3000/wods')
      .then(res => {
        setWorkout(res.data);
        showModal();
      })
      .catch(err => {
        console.log(err);
        Alert("Something went wrong!")
      })
  }

  /* 
    Signout and clear local storage 
    TODO: move to AuthProvider file
  */
  const signOut = () => firebase.auth().signOut()
    .then(AsyncStorage.clear())
    .catch(err => console.log('ERROR', err))

  return (
    <GradientView>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <TouchableOpacity 
          style={styles.transBtn}
          onPress={addWorkout}
        >
          <Text>Add Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.transBtn}
          onPress={signOut}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View>
        <AddWorkoutModal
          visible={modalVisible}
          handleClose={hideModal}
          workout={workout}
        />
      </View>
    </GradientView>
  )
}

const styles = EStyleSheet.create({
  header: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: '600',
  },
  transBtn: {
    height: '3rem',
    width: '50%',
    borderColor: 'black',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    opacity: 1
  }
})

export default Dashboard;
