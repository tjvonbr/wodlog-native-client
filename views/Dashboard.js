import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GradientView from '../components/LinearGradient';
import EStyleSheet from 'react-native-extended-stylesheet';

function Dashboard() {
  return (
    <GradientView>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <TouchableOpacity style={styles.transBtn}>
          <Text>Add Workout</Text>
        </TouchableOpacity>
      </View>
    </GradientView>
  )
}

const styles = EStyleSheet.create({
  header: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: '600',
  },
  transBtn: {
    height: '3rem',
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    opacity: 1
  }
})

export default Dashboard;
