import React, { useState } from 'react';
import axios from 'axios';
import { TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import IconButton from './buttons/IconButton';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddWorkoutModal = ({ handleClose, visible, workout }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  /* isVisible state is for addExercise modal */
  const [isVisible, SetIsVisible] = useState(false);

  /* Resetting input values on modal close */
  const resetState = () => {
    setName('')
    setDescription('')
  }

  /* Calls resetState fn and closes modal */
  const resetInputs = () => {
    handleClose();
    resetState();
  }

  /* 
    Update the workout's name and description while
    adding instances of the wod_exercise for the previously
    created WOD
  */
  const editWod = () => {
    return axios.put(`http://192.168.1.174:3000/wods/${workout.id}`, 
      {name, description})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  /* 
    Adds an exercise to the workout 
  */
  const addExerciseToWod = () => {
    return axios.post(`http://192.168.1.174:3000/wods`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <Modal 
      isVisible={visible}
      swipeDirection='down'
      swipeThreshold={80}
      onSwipeComplete={resetInputs}
    >
      <View style={styles.mainModal}>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.modalHeader}
            onChangeText={text => setName(text)}
            autoCapitalize='none'
            placeholder='New Workout'
            placeholderTextColor='black'
          >
            {name}
          </TextInput>
          <TextInput
            style={styles.description}
            onChangeText={text => setDescription(text)}
            multiline={true}
            blurOnSubmit={true}
            placeholder='Description...'
          >
            {description}
          </TextInput>
        </View>
        <View style={styles.exerciseWrapper}>
          <IconButton
            title="Add Exercise"
            icon='plus'
            size='20'
            backgroundColor='#61a4c7'
          />
        </View>
        <View style={styles.btnView}>
          <IconButton 
            title='Submit Workout'
            icon='check'
            size='20'
            backgroundColor='#de4ea8'
            handlePress={editWod}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = EStyleSheet.create({
  mainModal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '5%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  inputWrapper: {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: '1.6rem',
    fontWeight: '600',
    padding: '0.5rem',
    textAlign: 'center'
  },
  description: {
    width: '90%',
    height: '60%',
    borderStyle: 'solid',
    borderColor: '$lightgray',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    color: 'gray',
    padding: '0.5rem',
  },
  exerciseWrapper: {
    width: '90%',
    height: '65%',
    padding: '1rem',
    borderStyle: 'solid',
    borderColor: '$lightgray',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },  
  btnView: {
    height: '15%',
    width: '100%',
    padding: '1rem',
    flexDirection: 'column',
    justifyContent: 'center'
  },
})

export default AddWorkoutModal;
