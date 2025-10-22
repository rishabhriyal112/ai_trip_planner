// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2zfJez_k3XE_nsEKPatLQdAhlgSLK0Ag",
  authDomain: "aitripplanner-13033.firebaseapp.com",
  projectId: "aitripplanner-13033",
  storageBucket: "aitripplanner-13033.firebasestorage.app",
  messagingSenderId: "500607659915",
  appId: "1:500607659915:web:954eed872fd4e3663b898e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
