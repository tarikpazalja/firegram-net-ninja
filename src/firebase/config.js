import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDN_I8YP623F-_MOybxcAeAOohPMbltlOs",
  authDomain: "firegram-8750c.firebaseapp.com",
  databaseURL: "https://firegram-8750c.firebaseio.com",
  projectId: "firegram-8750c",
  storageBucket: "firegram-8750c.appspot.com",
  messagingSenderId: "1014577368861",
  appId: "1:1014577368861:web:0193fad83acc651e8edbf4",
  measurementId: "G-ZHX5YP2SYN",
};

/* var firebaseConfig = {
  apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
  authDomain: "the-net-ninja-sandbox.firebaseapp.com",
  databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
  projectId: "the-net-ninja-sandbox",
  storageBucket: "the-net-ninja-sandbox.appspot.com",
  messagingSenderId: "485942827092",
  appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
}; */

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
