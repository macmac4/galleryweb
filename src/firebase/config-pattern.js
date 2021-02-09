import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "albumweb-reactjs.firebaseapp.com",
  projectId: "albumweb-reactjs",
  storageBucket: "albumweb-reactjs.appspot.com",
  messagingSenderId: "517520510156",
  appId: "1:517520510156:web:96b16e10d301e93f748669",
  measurementId: "G-3YDHDSX9K7"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }