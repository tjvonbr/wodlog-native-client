import React, { useEffect, useState } from 'react';
import store from '../store';
import axios from 'axios';
import { config } from '../constants/env-variables';
import { ActivityIndicator, FlatList, Keyboard, SafeAreaView, Text, TextInput, View } from 'react-native';
import AddExerciseModal from '../components/AddExerciseModal';
import SmIconBtn from '../components/buttons/SmIconBtn';
import ExerciseListItem from '../components/ExerciseListItem';
import EStyleSheet from 'react-native-extended-stylesheet';
import { addExercise } from '../store';

function Exercises() {
  const [addIsVisible, setAddIsVisible] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');

  // Endpoint for HTTP request
  const exercisesApi = config.exercises;

  // Fetch exercises to pass along to exercises screen
  useEffect(() => {
    // axios.get(`${exercisesApi}/`)
    //   .then(res => {
    //     setExercises(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch(err => console.log(err))
    console.log(store.getStore())
  }, [refresh])

  // Handles typing into input field
  const handleChange = text => setExerciseName(text);

  // Handles refresh of exercises
  const handleRefresh = () => setRefresh(!refresh);

  // HTTP request to add exercise
  function addExercise() {
    axios.post(`${exercisesApi}`, { name: exerciseName })
      .then(res => {
        setExercises(res.data);
        Keyboard.dismiss();
        hideAddModal();
      })
      .catch(err => console.log(err))
  }

  // Reset inputs if modal closes
  function resetAddInputs() {
    setExerciseName('');
    hideAddModal();
  }

  function resetDelInputs() {
    setExerciseName('')
    hideDelModal();
  }

  // Renders exercise items in FlatList
  const renderExercise = ({ item }) =>
      <ExerciseListItem refresh={handleRefresh} item={item} />

  // Toggle modal -- TODO see if this can be exported from component file
  const showAddModal = () => setAddIsVisible(true);
  const hideAddModal = () => setAddIsVisible(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.innerHeaderWrapper}>
          <View style={{ flex: 2 }}></View>
          <Text style={styles.headerText}>Exercises</Text>
          <SmIconBtn handlePress={showAddModal} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearch(text)}
          placeholder='Search'
        />
      </View>
      <View style={styles.flatListWrapper}>
        { isLoading ? <ActivityIndicator /> : 
          (exercises < 1) ? 
          <View style={styles.emptyListWrapper}>
            <Text style={styles.emptyList}>
              You haven't added any exercises yet!
            </Text>
          </View> :
          <FlatList 
            data={exercises}
            renderItem={renderExercise}
            keyExtractor={(item) => item.id.toString()}
          />
        }
      </View>
      <View>
        <AddExerciseModal
          visible={addIsVisible}
          addExercise={addExercise}
          handleChange={handleChange}
          reset={resetAddInputs}
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
  },
  emptyListWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyList: {
    width: '50%',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '600'
  }
})

export default Exercises;
