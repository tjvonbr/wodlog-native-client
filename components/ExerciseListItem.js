import React, { useState } from 'react';
import axios from 'axios';
import { config } from '../constants/env-variables';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import DeleteExerciseModal from '../components/DeleteExerciseModal';
import EStyleSheet from 'react-native-extended-stylesheet';

const ExerciseListItem = ({ item, refresh }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [exercise, setExercise] = useState(item.name);
  const [input, setInput] = useState('');

  // Endpoint for HTTP request
  const exercisesApi = config.exercises;

  // Toggle modal
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  // Handle change to input field
  const handleChange = text => setInput(text);

  // Edit name functionality
  function editExercise() {
    axios.put(`${exercisesApi}/${item.id}`, {name: input})
      .then(res => {
        setExercise(res.data.name);
        Keyboard.dismiss();
        hideModal();
      })
      .catch(err => {
        console.log(err)
      });
  }

  // Delete exercise
  function deleteExercise() {
    axios.delete(`${exercisesApi}/${item.id}`)
      .then(() => {
        hideModal();
        refresh();
      })
      .catch(err => console.log(err))
  }

  return (
    <View>
    <TouchableOpacity
      activeOpacity={0.1}
      onLongPress={showModal}
    >
      <View style={styles.wrapper}>
        <Text style={styles.itemText}>{exercise}</Text>
      </View>
    </TouchableOpacity>
    <View>
        <DeleteExerciseModal
          change={handleChange}
          close={hideModal}
          remove={deleteExercise}
          submit={editExercise}
          visible={isVisible}
        />
      </View>
    </View>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    height: '3rem',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '$lightgray'
  },
  itemText: {
    fontWeight: '600'
  }
})

export default ExerciseListItem;
