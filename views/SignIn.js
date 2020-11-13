import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';

function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(error => console.log(error))
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>Welcome back!</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          autoCapitalize='none'
          placeholder='Email'
          value={email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          autoCapitalize='none'
          placeholder='Password'
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          title='Submit' 
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.redirect}>
            Don't have an account yet?  Sign up here.
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
  textWrapper: {
    flex: 1,
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    position: 'relative',
    top: '25%',
    left: '10%',
    width: '100%',
    fontSize: '2rem',
    fontWeight: '600',
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
  buttonText: {
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

export default SignIn;
