import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const fbConfig = {
  apiKey: 'AIzaSyCEtHeGcCWQ8AQG08uxFNG0-rhR1HZQkho',
  authDomain: 'marioplan-ca0f9.firebaseapp.com',
  databaseURL: 'https://marioplan-ca0f9.firebaseio.com',
  projectId: 'marioplan-ca0f9',
  storageBucket: 'marioplan-ca0f9.appspot.com',
  messagingSenderId: '898094526890',
  appId: '1:898094526890:web:f8f6b8ca5d14775838bbd3',
  measurementId: 'G-X0HNVEXYD6'
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
