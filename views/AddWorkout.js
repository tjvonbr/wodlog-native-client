import React, { useState } from 'react'
import { Modal, SafeAreaView, Text, TextInput, View } from 'react-native'
import AddWorkoutModal from '../components/AddWorkoutModal'
import SmIconBtn from '../components/buttons/SmIconBtn'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ScrollView } from 'react-native-gesture-handler'

const AddWorkout = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDescription, setWorkoutDescription] = useState('')

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

  const addWorkout =  async () => {
    try {
      const res =  await axios.post('http://192.168.1.174:3000/wods')
      setWorkout(res.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.workoutWrapper}>
        <TextInput
          style={styles.modalHeader}
          onChangeText={text => setWorkoutName(text)}
          autoCapitalize='none'
          placeholder='New Workout'
          placeholderTextColor='black'
        >
          {workoutName}
        </TextInput>
        <TextInput
            style={styles.description}
            onChangeText={text => setWorkoutDescription(text)}
            multiline={true}
            blurOnSubmit={true}
            placeholder='Description...'
            placeholderTextColor='gray'
          >
            {workoutDescription}
          </TextInput>
      </View>
      <View style={styles.addWrapper}>
        <View style={styles.addHeaderWrapper}>
          <Text style={styles.addHeader}>Exercises</Text>
          <SmIconBtn handlePress={showModal} />
        </View>
        <ScrollView>

        </ScrollView>
      </View>
      <AddWorkoutModal 
        visible={isVisible}
        handleClose={hideModal}
      />
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  addHeader: {
    fontSize: "1.2rem",
    fontWeight: '600',
    width: '90%'
  },
  addHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addWrapper: {
    width: '90%',
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    width: '90%',
    height: '10rem',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '$lightgray',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    color: 'gray',
    padding: '0.5rem',
    shadowColor: '$lightgray',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    shadowOpacity: 1
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: '1.6rem',
    fontWeight: '600',
    padding: '0.5rem',
    textAlign: 'center'
  },
  workoutWrapper: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default AddWorkout
