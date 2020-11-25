import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';
import { addExercise } from '../actions/actions';
import Modal from 'react-native-modal';
import BaseButton from '../components/buttons/BaseBtn';
import EStyleSheet from 'react-native-extended-stylesheet';

function AddExerciseModal({ addExercise, hide, visible }) {
  const [exercise, setExercise] = useState('');

  // Handles typing into input field
  const handleChange = text => setExercise(text);

  // Handles successful submission of exercise
  function handleSubmit() {
    addExercise(exercise);
    hide();
  }

  return (
    <Modal
      isVisible={visible}
      swipeDirection='down'
      swipeThreshold={80}
      onSwipeComplete={hide}
    >
      <View style={styles.mainModal}>
          <Text style={styles.headerText}>New Exercise</Text>
          <TextInput 
            style={styles.input}
            onChangeText={handleChange}
            placeholder='Add name'
            placeholderTextColor='gray'
          />
          <BaseButton 
            backgroundColor='#61a4c7'
            title='Save Exercise'
            handlePress={handleSubmit}
          />
      </View>
    </Modal>
  )
}

const styles = EStyleSheet.create({
  mainModal: {
    height: '25%',
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
  }
})

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { addExercise }
)(AddExerciseModal);
