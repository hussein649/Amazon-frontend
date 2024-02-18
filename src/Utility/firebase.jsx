
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtKax3n2_T1bLXSpvnOGufiize2IufHY",
  authDomain: "building--clone.firebaseapp.com",
  projectId: "building--clone",
  storageBucket: "building--clone.appspot.com",
  messagingSenderId: "457162552610",
  appId: "1:457162552610:web:30c4ff460fcf008214617b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db=app.firestore()
