// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFAxcUq-99_mdGHLiGaoCygjnqo2IOdM",
  authDomain: "hs-final-4fc8d.firebaseapp.com",
  projectId: "hs-final-4fc8d",
  storageBucket: "hs-final-4fc8d.appspot.com",
  messagingSenderId: "573005251189",
  appId: "1:573005251189:web:a28dfa0773272f9672ae3c",
  measurementId: "G-KQXHZS6X6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}