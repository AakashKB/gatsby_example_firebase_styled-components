import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDjS6tGpqjAaC0aXQAGZMkjssABbZzTgSo',
  authDomain: 'awesome-bb71b.firebaseapp.com',
  databaseURL: 'https://awesome-bb71b.firebaseio.com',
  projectId: 'awesome-bb71b',
  storageBucket: 'awesome-bb71b.appspot.com',
  messagingSenderId: '646496200074',
}

let firebaseCache = null

//  Return firebase, init if not inited
const initFirebase = () => {
  if (firebaseCache) {
    return firebaseCache
  }
  console.log('init')
  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default initFirebase
