// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwGCrIeHgP9UBIQ6HWFO49wNpKZd53hLk",
  authDomain: "kida-pass-management.firebaseapp.com",
  projectId: "kida-pass-management",
  storageBucket: "kida-pass-management.appspot.com",
  messagingSenderId: "24695353688",
  appId: "1:24695353688:web:7be454214ab53157cff52d",
  measurementId: "G-J6N92JGPQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
