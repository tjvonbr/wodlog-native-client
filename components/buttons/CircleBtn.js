import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';

const CircleBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome5 name='plus' color='#de4ea8' size={15} />
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  button: {
    width: '5rem',
    height: '3rem',
    position: 'absolute',
    bottom: '5%',
    right: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
    borderColor: 'blue',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1
  }
})

export default CircleBtn;
