// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluBs4rBTbibzAjNa253Ly8cwYCICHxpc",
  authDomain: "vitefirebase-10017.firebaseapp.com",
  projectId: "vitefirebase-10017",
  storageBucket: "vitefirebase-10017.appspot.com",
  messagingSenderId: "1062505447832",
  appId: "1:1062505447832:web:13154105ffd7ed86d12bed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)