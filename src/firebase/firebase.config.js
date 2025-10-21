// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDemud_bjt0WcDXat0bznJIyK0qi5pgxeQ",
  authDomain: "dragon-news-auth-router-89729.firebaseapp.com",
  projectId: "dragon-news-auth-router-89729",
  storageBucket: "dragon-news-auth-router-89729.firebasestorage.app",
  messagingSenderId: "620546659213",
  appId: "1:620546659213:web:e3da4e106d12de3011e3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);