// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCNzlGF1...",
  authDomain: "obw-5cd59.firebaseapp.com",
  projectId: "obw-5cd59",
  storageBucket: "obw-5cd59.appspot.com", // Fix this (remove "firebasestorage.app")
  messagingSenderId: "991330376037",
  appId: "1:991330376037:web:3d63ae1321ed727329e98c",
  measurementId: "G-J029ML2C4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Get Firebase Storage instance

export { storage };
