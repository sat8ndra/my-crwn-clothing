import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA7xglZGJ3EpUngdkdp7LpmNcwt2K9-rjg',
  authDomain: 'crwn-db-6856c.firebaseapp.com',
  databaseURL: 'https://crwn-db-6856c.firebaseio.com',
  projectId: 'crwn-db-6856c',
  storageBucket: 'crwn-db-6856c.appspot.com',
  messagingSenderId: '834303939160',
  appId: '1:834303939160:web:5952168b2685cfb801f02d',
  measurementId: 'G-69QEJMBYEQ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
