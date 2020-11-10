import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import GradientView from '../components/LinearGradient';
import EStyleSheet from 'react-native-extended-stylesheet';

function Dashboard() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GradientView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.transBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Modal appears!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <TouchableOpacity 
          style={styles.transBtn}
          onPress={() => setModalVisible(true)}  
        >
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
  modal: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  transBtn: {
    height: '3rem',
    width: '50%',
    borderColor: 'black',
    borderWidth: 2,
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
