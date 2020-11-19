import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../constants/env-variables';
import { FlatList, Keyboard, SafeAreaView, Text, TextInput, View } from 'react-native';
import AddExerciseModal from '../components/AddExerciseModal';
import SmIconBtn from '../components/buttons/SmIconBtn';
import ExerciseListItem from '../components/ExerciseListItem';
import EStyleSheet from 'react-native-extended-stylesheet';

function Exercises() {
  const [isVisible, setIsVisible] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [search, setSearch] = useState('');

  // Endpoint for HTTP request
  const exercisesApi = config.exercises;

  // Fetch exercises to pass along to exercises screen
  useEffect(() => {
    axios.get(`${exercisesApi}/`)
      .then(res => {
        setExercises(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  // Handles typing into input field
  const handleChange = text => setExerciseName(text);

  // HTTP request to add exercise
  function addExercise() {
    axios.post(`${exercisesApi}`, { name: exerciseName })
      .then(res => {
        setExercises(res.data);
        Keyboard.dismiss();
        hideModal();
      })
      .catch(err => console.log(err))
  }

  // Reset inputs if modal closes
  function resetInputs() {
    setExerciseName('');
    hideModal();
  }

  // Renders exercise items in FlatList
  function renderExercise({ item }) {
    return <ExerciseListItem item={item} />
  }

  // Toggle modal -- TODO see if this can be exported from component file
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.innerHeaderWrapper}>
          <View style={{ flex: 2 }}></View>
          <Text style={styles.headerText}>Exercises</Text>
          <SmIconBtn handlePress={showModal} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearch(text)}
          placeholder='Search'
        />
      </View>
      <View style={styles.flatListWrapper}>
        <FlatList 
          data={exercises}
          renderItem={renderExercise}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View>
        <AddExerciseModal
          visible={isVisible}
          addExercise={addExercise}
          handleChange={handleChange}
          reset={resetInputs}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHeaderWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    flex: 6,
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  input: {
    width: '90%',
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
    marginTop: 5
  },
  flatListWrapper: {
    width: '100%',
    flex: 1
  }
})

export default Exercises;
