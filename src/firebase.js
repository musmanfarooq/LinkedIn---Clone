import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqP7HHOYsDPRA46Y7Cyi1XxY5gTye_K_A",
  authDomain: "linkedin-clone-949a7.firebaseapp.com",
  projectId: "linkedin-clone-949a7",
  storageBucket: "linkedin-clone-949a7.appspot.com",
  messagingSenderId: "991717710694",
  appId: "1:991717710694:web:2b6d606284819ebfed86a7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
