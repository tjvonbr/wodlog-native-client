import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const TransparentView = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Transparent View</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    height: 50,
    width: '50%',
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2
  }
})

export default TransparentView
