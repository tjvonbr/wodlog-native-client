import React from 'react';
import { Text, View } from 'react-native';
import AddExerBtn from './buttons/AddExerBtn'
import EStyleSheet from 'react-native-extended-stylesheet';

const NewExercise = () => {
  return (
    <View style={styles.exerciseWrapper}>
      <AddExerBtn />
      <Text>New Exercise</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  exerciseWrapper: {
    height: '4rem',
    width: '100%',
    padding: '0.5rem',
    borderStyle: 'solid',
    borderColor: '$lightgray',
    borderWidth: 1,
  }
})

export default NewExercise;
