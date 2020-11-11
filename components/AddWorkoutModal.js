import React from 'react';
import { TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import IconButton from './IconButton';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddWorkoutModal = ({ 
    visible, handleClose, handleName, handleDescription, name, description 
  }) => {
    return (
      <Modal 
        isVisible={visible}
        swipeDirection='down'
        swipeThreshold={80}
        onSwipeComplete={handleClose}
      >
        <View style={styles.mainModal}>
          <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.modalHeader}
              onChangeText={handleName}
              autoCapitalize='none'
              caretHidden={false}
            >
              {name}
            </TextInput>
            <TextInput
              style={styles.description}
              onChangeText={handleDescription}
              multiline={true}
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
