import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import EStyleSheet from 'react-native-extended-stylesheet';

function SignIn({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>Welcome back!</Text>
      </View>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('username')}
              autoCapitalize='none'
              placeholder='Username'
              value={values.username}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              autoCapitalize='none'
              placeholder='Password'
              value={values.password}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
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
        )}
      </Formik>
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
