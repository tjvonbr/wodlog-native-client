import React from 'react'
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const WodExerciseListItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{item.name}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    height: '3rem',
    backgroundColor: 'white',
    marginBottom: '1rem',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    shadowColor: '$lightgray',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center'
    
  }
})

export default WodExerciseListItem
