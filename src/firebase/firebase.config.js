// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDstAOBsFHtLqr88set41_NYW3oiuG0ANk",
  authDomain: "land-times.firebaseapp.com",
  projectId: "land-times",
  storageBucket: "land-times.appspot.com",
  messagingSenderId: "639986950221",
  appId: "1:639986950221:web:7d6cf71ed1d0893be43c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;