// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8_0PPlXNHCUSwQhO-9TF6vsclkcu1CjI",
  authDomain: "sous-31a4e.firebaseapp.com",
  projectId: "sous-31a4e",
  storageBucket: "sous-31a4e.appspot.com",
  messagingSenderId: "895632335056",
  appId: "1:895632335056:web:4e36c2f8c7c069a66abed5",
  measurementId: "G-4VRWWV0P9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
