import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('BDjZsZNONurzPNtKplGf')
  .collection('cartItems')
  .doc('FGZwJSq9IQSJ0jeZnloW');
firestore.doc('/users/BDjZsZNONurzPNtKplGf/cartItems/FGZwJSq9IQSJ0jeZnloW');
firestore.collection('/users/BDjZsZNONurzPNtKplGf/cartItems');
