import * as firebase from 'firebase';

async function isSignedIn() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      return true
    } else {
      return false
    }
  })
}

export default isSignedIn;
