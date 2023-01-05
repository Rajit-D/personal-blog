import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
// import 'firebase/compat/storage'
import 'firebase/compat/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB760NQkkdfj76ctHLdJRlEkKCPDDOSAGs",
  authDomain: "firegram-d9a5c.firebaseapp.com",
  projectId: "firegram-d9a5c",
  storageBucket: "firegram-d9a5c.appspot.com",
  messagingSenderId: "76133588238",
  appId: "1:76133588238:web:1f9e80f829b091a4974b5f"
};

// firebase.initializeApp(firebaseConfig);
export const app= initializeApp(firebaseConfig);

// const projectStorage= firebase.storage();
// const projectFirestore= firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {timestamp};