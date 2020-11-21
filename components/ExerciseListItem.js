import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DeleteExerciseModal from '../components/DeleteExerciseModal';
import EStyleSheet from 'react-native-extended-stylesheet';

const ExerciseListItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [exercise, setExercise] = useState(item);

  useEffect(() => {
    console.log(item)
  }, [item])

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  function deleteExercise() {
    axios.delete(`${exercisesApi}/:${id}`)
      .then(res => {
        setExercises(res.data);
        hideModal();
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
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
    <View>
        <DeleteExerciseModal 
          visible={isVisible}
          handleClose={hideModal}
          handleChange={handleChange}
          reset={resetDelInputs}
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
