import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
// ##############################
// YOUR CONFIGURATION 
// ##############################
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = getAuth(app);

export const rsf = new ReduxSagaFirebase(app);
