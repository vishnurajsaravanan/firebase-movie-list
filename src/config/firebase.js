// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAfmDXO5uZSgtPOsz3eoIRrAnLJ9i3qIPI",
  authDomain: "fir-tutorial-c749b.firebaseapp.com",
  projectId: "fir-tutorial-c749b",
  storageBucket: "fir-tutorial-c749b.appspot.com",
  messagingSenderId: "438223253650",
  appId: "1:438223253650:web:f8f39992f6a37d599bb64b",
  measurementId: "G-KXGL3VJ2CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);