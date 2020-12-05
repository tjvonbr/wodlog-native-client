import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, View } from 'react-native'
import SelectableListItem from '../components/SelectableListItem'
import Modal from 'react-native-modal'
import EStyleSheet from 'react-native-extended-stylesheet'

const AddWorkoutModal = ({ add, exercises, handleClose, remove, visible }) => {
  const [description, setDescription] = useState('')
  const [isVisible, SetIsVisible] = useState(false)
  const [name, setName] = useState('')

  const storeExercises = useSelector(state => state.exercises)

  /* Resetting input values on modal close */
  const resetState = () => {
    setName('')
    setDescription('')
  }

  /* Calls resetState fn and closes modal */
  const resetInputs = () => {
    handleClose()
    resetState()
  }

  return (
    <Modal 
      isVisible={visible}
      swipeDirection='down'
      swipeThreshold={80}
      onSwipeComplete={resetInputs}
      onBackdropPress={() => handleClose()}
    >
      <View style={styles.mainModal}>
        <View style={styles.flatListWrapper}>
          <FlatList 
            data={storeExercises}
            extraData={storeExercises}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ index, item }) => {
              return (
                <SelectableListItem 
                  add={add}
                  index={index}
                  item={item}
                  remove={remove}
                  exercises={exercises}
                />
              )
            }}
          >
          </FlatList>
        </View>
      </View>
    </Modal>
  )
}

const styles = EStyleSheet.create({
  flatListWrapper: {
    width: '100%' 
  },
  mainModal: {
    height:'75%',
    marginTop: '10%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
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
  },  
  btnView: {
    height: '15%',
    width: '100%',
    padding: '1rem',
    flexDirection: 'column',
    justifyContent: 'center'
  },
})

export default AddWorkoutModal
