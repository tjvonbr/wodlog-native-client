import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';

// Not sure if there is a way to clean this up...
function RegisterUser({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    navigation.navigate("Dashboard")
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Let's get you started!</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={text => setFirstName(text)}
          placeholder='First name'
          value={firstName}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setLastName(text)}
          placeholder='Last name'
          value={lastName}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          autoCapitalize='none'
          placeholder='Username'
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          autoCapitalize='none'
          placeholder='Email'
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          autoCapitalize='none'
          placeholder='Password'
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          title='Submit' 
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.redirect}>
            Already have an account?  Sign in!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "$white",
  },
  headerWrapper: {
    height: '30%',
  },
  header: {
    position: 'relative',
    top: '40%',
    left: '10%',
    width: '70%',
    fontSize: '2rem',
    fontWeight: '600',
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '$lightgray',
    paddingBottom: '0.5rem',
    marginLeft: '5%',
    marginBottom: '3rem',
    marginRight: '5%',
    fontSize: '1rem',
    color: '$black',
  },
  button: {
    height: '3rem',
    width: '80%',
    backgroundColor: '$steel',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
  },
  btnText: {
    color: '$white',
    fontSize: '1rem',
    fontWeight: '500'
  },
  redirect: {
    width: '50%',
    marginTop: 20,
    textAlign: 'center'
  }
})

export default RegisterUser;
