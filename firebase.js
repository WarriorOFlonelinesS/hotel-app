
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from '@firebase/auth'
// import { initializeFirestore } from 'firebase/firestore';

// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
// const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;
// const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
// const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
// const MESSANGING_SENDER_ID = process.env.NEXT_PUBLIC_MESSANGING_SENDER_ID;
// const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
// const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: "AIzaSyATI_MQi0y6Kvke5BFeYvaOhPhQ3BEBLAQ",
  authDomain: "hotel-app-d6b44.firebaseapp.com",
  databaseURL: "https://hotel-app-d6b44-default-rtdb.firebaseio.com",
  projectId: "hotel-app-d6b44",
  storageBucket: "hotel-app-d6b44.appspot.com",
  messagingSenderId: "1077353399315",
  appId: "1:1077353399315:web:047a8eb25ac9dd4012ebe6",
  measurementId: "G-FYYX8NMRHV"
};

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSANGING_SENDER_ID ,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID
// };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth= getAuth()