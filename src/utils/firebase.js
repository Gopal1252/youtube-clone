// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7bN2FnCP-yecpoUSn7zummZ5SWSRbCdI",
  authDomain: "clone-3eef8.firebaseapp.com",
  projectId: "clone-3eef8",
  storageBucket: "clone-3eef8.appspot.com",
  messagingSenderId: "276346904758",
  appId: "1:276346904758:web:189f514f83e5f233fa8617",
  measurementId: "G-RQFMS107Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);