import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBLnQMr7IRtWPLNKdI_f27xtcOdgAycfVY',
  authDomain: 'react-slack-clone-e0e28.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-e0e28.firebaseio.com',
  projectId: 'react-slack-clone-e0e28',
  storageBucket: 'react-slack-clone-e0e28.appspot.com',
  messagingSenderId: '1065115773912',
  appId: '1:1065115773912:web:8a8af274d3d0bff0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
