import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddExerBtn = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <View style={styles.iconWrapper}>

      </View>
      <View style={styles.textWrapper}>
        <Text>Add Button</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  btn: {
    width: '3rem',
    height: '3rem',
    backgroundColor: '$steel',
    flex: 1
  },
  iconWrapper: {
    height: '100%',
    width: '25%',
    borderStyle: 'solid',
    borderRightColor: '$lightgray',
    backgroundColor: 'white'
    
  },
  textWrapper: {

  }
})

export default AddExerBtn;