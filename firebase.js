
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
############################################
  YOUR CONFIGURATION
##########################################
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth= getAuth()
