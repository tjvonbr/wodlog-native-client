import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import CircleBtn from '../components/buttons/CircleBtn';
import EStyleSheet from 'react-native-extended-stylesheet';

function Exercises() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Exercises</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearch(text)}
          placeholder='Search'
        />
      </View>
      <CircleBtn />
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '600'
  },
  input: {
    width: '90%',
    padding: '0.5rem',
    fontSize: '1rem',
    color: '$black',
    backgroundColor: '$lightgray',
    borderWidth: 1,
    borderColor: '$lightgray',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: 15
  }
})

export default Exercises;
