import { useState } from "react";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  const [count, setCount] = useState(0);

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

  return (
    <main className="w-full min-h-screen h-full py-10 px-24 bg-blue-200 font-sans flex flex-col justify-center items-center">
      <h1 className="font-black text-9xl">sous</h1>
      <h2 className="text-3xl">your collaborative kitchen</h2>
    </main>
  );
}

export default App;
