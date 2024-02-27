// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBjmFlQrm9pOTg2rwr89TASZfAqD4CeLqQ",
  authDomain: "closer2christ-d38d7.firebaseapp.com",
  projectId: "closer2christ-d38d7",
  storageBucket: "closer2christ-d38d7.appspot.com",
  messagingSenderId: "503383593517",
  appId: "1:503383593517:web:fd8bebc054b5e6e8ac9ea4",
  measurementId: "G-3R9Q7LZ3DC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
