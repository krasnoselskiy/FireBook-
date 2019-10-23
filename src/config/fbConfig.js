import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCm_8ldwyzVMX9bihQV6EDyYMk6wRf6ko",
  authDomain: "firebook-d66bd.firebaseapp.com",
  databaseURL: "https://firebook-d66bd.firebaseio.com",
  projectId: "firebook-d66bd",
  storageBucket: "firebook-d66bd.appspot.com",
  messagingSenderId: "269932153908",
  appId: "1:269932153908:web:82565ccdf8553ef535ce61",
  measurementId: "G-861BVJ7LLG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
