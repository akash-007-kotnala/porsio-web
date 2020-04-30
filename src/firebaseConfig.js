import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA8ur0_HP5my1PE_nyc4dYSBQ_RgMwriMo",
    authDomain: "porsio-3829b.firebaseapp.com",
    databaseURL: "https://porsio-3829b.firebaseio.com",
    projectId: "porsio-3829b",
    storageBucket: "porsio-3829b.appspot.com",
    messagingSenderId: "707821148409",
    appId: "1:707821148409:web:bde17c4db351678978ea28",
    measurementId: "G-NQZ7XE414N"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// if (location.hostname === "localhost") {
//   db.settings({
//     host: "localhost:8080",
//     ssl: false
//   });
// }

export default firebase;