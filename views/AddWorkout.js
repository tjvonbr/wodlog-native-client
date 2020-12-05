import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native'
import AddWorkoutModal from '../components/AddWorkoutModal'
import DropDownPicker from 'react-native-dropdown-picker'
import SmIconBtn from '../components/buttons/SmIconBtn'
import EStyleSheet from 'react-native-extended-stylesheet'
import WodExerciseListItem from '../components/WodExerciseListItem'

const AddWorkout = () => {
  const [exercises, setExercises] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [scoringStyle, setScoringStyle] = useState(null)
  const [workoutName, setWorkoutName] = useState('')
  const [workoutDescription, setWorkoutDescription] = useState('')

  const addExercise = exercise => {
    setExercises([...exercises, exercise])
  }

  const removeExercise = exercise => {
    setExercises(exercises.filter(item => item != exercise))
  }

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

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
      <View style={styles.styleWrapper}>
        <Text style={styles.scoringHeader}>Scoring Style</Text>
        <DropDownPicker 
          items={[
            {label: 'USA', value: 'USA'},
            {label: 'UK', value: 'UK'},
            {label: 'France', value: 'France'}
          ]}
          defaultValue={scoringStyle}
          containerStyle={styles.dropdownContainer }
          onChangeItem={item => setScoringStyle(item.value)}
        />
      </View>
      <View style={styles.addWrapper}>
        <View style={styles.addHeaderWrapper}>
          <Text style={styles.addHeaders}>Exercises</Text>
          <SmIconBtn handlePress={showModal} />
        </View>
        <View style={{ width: '100%' }}>
          <FlatList
            data={exercises}
            extraData={exercises}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => {
              return <WodExerciseListItem item={item} />
            }}
          >
          </FlatList>
        </View>
      </View>
      <AddWorkoutModal
        add={addExercise}
        remove={removeExercise}
        visible={isVisible}
        handleClose={hideModal}
        exercises={exercises}
      />
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  addHeaders: {
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
    marginTop: '1rem',
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
  dropdownContainer: {
    height: 40,
    width: 150,
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
  scoringHeader: {
    fontSize: "1.2rem",
    fontWeight: '600',
  },  
  styleWrapper: {
    width: '90%',
    marginTop: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  workoutWrapper: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default AddWorkout
