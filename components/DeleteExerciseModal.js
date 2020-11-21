import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import BaseButton from '../components/buttons/BaseBtn';
import EStyleSheet from 'react-native-extended-stylesheet';

function DeleteExerciseModal(
  { deleteExercise, handleChange, reset, visible }
    ) {
  return (
    <Modal
      isVisible={visible}
      swipeDirection='down'
      swipeThreshold={80}
      onSwipeComplete={reset}
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
          />
          <BaseButton
            backgroundColor="#ff4d4d"
            title='Delete Exercise'
            handlePress={deleteExercise}
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

export default DeleteExerciseModal;
