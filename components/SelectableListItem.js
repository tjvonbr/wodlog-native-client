/* 
  This component is for the FlatList found in
  AddWorkoutModal--should be able to select multiple
  exercises to include in the daily WOD
*/

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const SelectableListItem = ({ index, item }) => {
  const [exercise, setExercise] = useState(item.name)
  const [isSelected, setIsSelected] = useState(false)

  const exercises = useSelector(state => state.exercises)
  const selectItem = () => setIsSelected(!isSelected)

  return (
      <TouchableOpacity onPress={selectItem}>
        <View style={
          [
            styles.wrapper,
            isSelected ? styles.outerSelected : styles.outerUnselected,
            index === 0 ? styles.firstItem : null,
          ]
        }>
          <View style={
            [
              styles.innerWrapper,
              index === 0 ? styles.innerFirst : null,
              index === (exercises.length - 1) ? styles.lastItem : null,
              isSelected ? styles.innerSelected : styles.innerUnselected
            ]    
          }>
            <Text style={styles.itemText}>{exercise}</Text>
            <FontAwesome5
              name={isSelected ? 'check' : 'plus'} 
              size={15} 
              color={isSelected ? 'green' : 'red'} 
            />
          </View>
        </View>
      </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  firstItem: {
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  firstSelected: {
    borderWidth: 0,
  },
  firstUnselected: {
    borderWidth: 0,
  },
  lastItem: {
    borderTopWidth: 0
  },
  innerWrapper: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  innerFirst: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  innerSelected: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  innerUnselected: {
    borderColor: '$lightgray',
  },
  itemText: {
    fontWeight: '600'
  },
  outerSelected: {
    backgroundColor: '$lightgray',
  },
  outerUnselected: {
    backgroundColor: 'white'
  },
  wrapper: {
    height: '3rem',
    width: '100%'
  },
})

export default SelectableListItem
