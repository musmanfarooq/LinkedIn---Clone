import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9DJcPl48_RozCe2rNEVKwunzVcufZru0",
  authDomain: "linkedin---clone-79f15.firebaseapp.com",
  projectId: "linkedin---clone-79f15",
  storageBucket: "linkedin---clone-79f15.appspot.com",
  messagingSenderId: "171257879741",
  appId: "1:171257879741:web:89371d2e9e9e2836b6ebd4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
