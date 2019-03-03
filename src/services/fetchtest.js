import firebase from 'firebase'

export default async () => {
  //  const firebase = getFirebase() // Gets firebase, inits firebase if not configured
  const snapshot = await firebase
    .database()
    .ref('/test')
    .once('value')
  return snapshot.val()
}
