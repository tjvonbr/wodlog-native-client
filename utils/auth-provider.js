import * as firebase from 'firebase';

var isSignedIn = firebase.auth().onAuthStateChanged(user => {
  if (user) {
    return true
  } else {
    return false
  }
})

module.exports =  { isSignedIn }