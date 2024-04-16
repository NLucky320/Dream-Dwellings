// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwrrrxDwN8vuCryw8JnNJAEJYrvDzVYPM",
  authDomain: "assignment-nine-f0f49.firebaseapp.com",
  projectId: "assignment-nine-f0f49",
  storageBucket: "assignment-nine-f0f49.appspot.com",
  messagingSenderId: "600213117250",
  appId: "1:600213117250:web:a574a185dc1c225ccdd0db",
  measurementId: "G-W0T9NZ3QMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
