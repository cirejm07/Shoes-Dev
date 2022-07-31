
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCtgLnAtYwgw26hCbdNp92fAmgV7eEevkM",
  authDomain: "auth-example-1d31d.firebaseapp.com",
  projectId: "auth-example-1d31d",
  storageBucket: "auth-example-1d31d.appspot.com",
  messagingSenderId: "951751810777",
  appId: "1:951751810777:web:a66cce8c7bd165f89e28c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
const auth = getAuth(app)
// firestore
const db = getFirestore(app)
const shoesCollectionRef = collection(db, 'shoes')
export { auth, shoesCollectionRef }