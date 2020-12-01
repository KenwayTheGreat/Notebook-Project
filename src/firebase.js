import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6mmopf63yh9qq15r1wJuMxYwL9ZAXX94",
  authDomain: "noteapp-c6930.firebaseapp.com",
  databaseURL: "https://noteapp-c6930.firebaseio.com",
  projectId: "noteapp-c6930",
  storageBucket: "noteapp-c6930.appspot.com",
  messagingSenderId: "1075040470073",
  appId: "1:1075040470073:web:02278045be5ab33b1239e8",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
