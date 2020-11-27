import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { editExercise, deleteExercise } from '../actions/actions';
import Modal from 'react-native-modal';
import BaseButton from '../components/buttons/BaseBtn';
import EStyleSheet from 'react-native-extended-stylesheet';

function DeleteExerciseModal(
  { editExercise, deleteExercise, hide, item, visible }
  ) {
  const [input, setInput] = useState('');

  // Handle change to input field
  const handleChange = text => setInput(text);

  // Edit name functionality
  function handleSubmit() {
    editExercise(item.id, input)
  }

  function handleDelete() {
    deleteExercise(item.id)
  }

  function handleClose() {
    hide()
  }

  return (
    <Modal
      isVisible={visible}
      swipeDirection='down'
      swipeThreshold={80}
      onSwipeComplete={handleClose}
    >
      <View style={styles.mainModal}>
        <Text style={styles.headerText}>Edit Exercise</Text>
        <TextInput 
            style={styles.input}
            onChangeText={handleChange}
            placeholder='Edit name'
            placeholderTextColor='gray'
          />
          <BaseButton 
            backgroundColor='#61a4c7'
            title='Edit Exercise'
            handlePress={handleSubmit}
          />
          <BaseButton
            backgroundColor="#ff4d4d"
            title='Delete Exercise'
            handlePress={handleDelete}
          />
      </View>
    </Modal>
  )
}

const styles = EStyleSheet.create({
  mainModal: {
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '5%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  headerText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: '2.3rem',
    padding: '0.5rem',
    fontSize: '1rem',
    color: '$black',
    backgroundColor: '$lightgray',
    borderWidth: 1,
    borderColor: '$lightgray',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: 5,
  },
  btnWrapper: {
    width: '90%',
  }
})

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { editExercise, deleteExercise }
)(DeleteExerciseModal);
