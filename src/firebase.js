// import firebase from 'firebase/app';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGFj5yZVskYIm2Jnq7jy4aknjRC5V6fqo",
  authDomain: "react-hooks-blogs-30298.firebaseapp.com",
  projectId: "react-hooks-blogs-30298",
  storageBucket: "react-hooks-blogs-30298.appspot.com",
  messagingSenderId: "798775417574",
  appId: "1:798775417574:web:528dc8cd3834ddd66ab927"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const firestore=firebase.firestore();