// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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