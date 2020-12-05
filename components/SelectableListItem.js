/* 
  This component is for the FlatList found in
  AddWorkoutModal--should be able to select multiple
  exercises to include in the daily WOD
*/

import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const SelectableListItem = ({ add, exercises, index, item, remove }) => {
  const [isSelected, setIsSelected] = useState(false)

  // Renders the list item as selected/unselected if it's already in the
  // list
  useEffect(() => {
    exercises.includes(item) ? setIsSelected(true) : null
    }
  )

  const handleSelect = () => {
    setIsSelected(true)
    add(item)
  }

  const handleDeselect = () => {
    setIsSelected(false)
    remove(item)
  }

  return (
      <TouchableOpacity onPress={isSelected ? handleDeselect : handleSelect}>
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
            <Text style={styles.itemText}>{item.name}</Text>
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
