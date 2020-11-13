import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AddWorkoutModal from '../components/AddWorkoutModal';
import GradientView from '../components/LinearGradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';

const Dashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  /* Toggling modal visibility */
  const showModal = () => setModalVisible(true);

  const hideModal = () => {
    setModalVisible(false);
  }

  const signOut = () => firebase.auth().signOut()
    .then(res => console.log("RESPONSE"))
    .catch(err => console.log('ERROR'))

  return (
    <GradientView>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <TouchableOpacity 
          style={styles.transBtn}
          onPress={showModal}
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
