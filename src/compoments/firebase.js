// src/firebase.js
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDEFuNCEm0-VAwUnK3kYMclb9-4cRAqQRQ',
  authDomain: 'contactform-1041f.firebaseapp.com',
  databaseURL: 'https://contactform-1041f.firebaseio.com',
  projectId: 'contactform-1041f',
  storageBucket: 'contactform-1041f.appspot.com',
  messagingSenderId: '301462763734',
};
firebase.initializeApp(config);
export default firebase;
