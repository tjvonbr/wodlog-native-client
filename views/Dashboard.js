import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AddWorkoutModal from '../components/AddWorkoutModal';
import GradientView from '../components/LinearGradient';
import EStyleSheet from 'react-native-extended-stylesheet';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('New Workout');
  const [description, setDescription] = useState('Description...');

  /* Toggling modal visibility */
  const hideModal = () => {
    resetState(),    
    setModalVisible(false);
  }
  const showModal = () => setModalVisible(true);

  /* Resetting input values on modal close */
  const resetState = () => {
    setName('New Workout')
    setDescription('Description...')
  }

  /* Handling input changes */
  const handleNameChange = text => setName(text);
  const handleDescrChange = text => setDescription(text);

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
      </View>

      <View>
        <AddWorkoutModal
          visible={modalVisible}
          handleClose={hideModal}
          handleName={handleNameChange}
          handleDescription={handleDescrChange}
          name={name}
          description={description}
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
