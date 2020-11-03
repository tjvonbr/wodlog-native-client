import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import EStyleSheet from 'react-native-extended-stylesheet';

function RegisterOwner() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Let's get you started!</Text>
      </View>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values}) => (
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('firstName')}
              placeholder='First name'
              value={values.firstName}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('lastName')}
              placeholder='Last name'
              value={values.lastName}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('username')}
              autoCapitalize='none'
              placeholder='Username'
              value={values.username}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              autoCapitalize='none'
              placeholder='Email'
              value={values.email}
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
              <Text style={styles.btnText}>Register</Text>
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
  headerWrapper: {
    height: '25%'
  },
  header: {
    position: 'relative',
    top: '10%',
    left: '10%',
    width: '80%',
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
})

export default RegisterOwner;
