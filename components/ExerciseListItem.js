import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DeleteExerciseModal from '../components/DeleteExerciseModal';
import EStyleSheet from 'react-native-extended-stylesheet';

const ExerciseListItem = ({ item, refresh }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [exercise, setExercise] = useState(item.name);

  // Toggle modal
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

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
          hide={hideModal}
          item={item}
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
