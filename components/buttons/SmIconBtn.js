import React from 'react';
import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';

function SmIconBtn({ handlePress }) {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={handlePress}  
    >
      <FontAwesome5 name='plus' color='#de4ea8' size={20} />
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SmIconBtn;
