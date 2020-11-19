import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function BaseButton({ backgroundColor, handlePress, title }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.btn,
        { backgroundColor }
      ]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  btn: {
    height: '3rem',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  btnText: {
    color: 'white',
    fontWeight: '600'
  }
})

export default BaseButton;
