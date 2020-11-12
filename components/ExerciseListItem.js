import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ExerciseListItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.itemText}>{item.name}</Text>
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
