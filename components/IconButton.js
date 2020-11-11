import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

function IconButton({ handlePress, title, icon, backgroundColor }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        { backgroundColor }
      ]}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome5 name={icon} color='white' size={20} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  button: {
    height: '3rem',
    width: '100%',
    backgroundColor: '$steel',
    display: 'flex',
    flexDirection: 'row',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightColor: 'white',
    borderRightWidth: 1
  },
  textWrapper: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600'
  }
})

export default IconButton;
