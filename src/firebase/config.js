import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1djd4pwlfRgThkP3kSrF27JOywFTouKs",
  authDomain: "muso-ninjas-cb9fc.firebaseapp.com",
  projectId: "muso-ninjas-cb9fc",
  storageBucket: "muso-ninjas-cb9fc.firebasestorage.app",
  messagingSenderId: "90739879906",
  appId: "1:90739879906:web:e9b6b1c3612e8f0f1653bb"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };