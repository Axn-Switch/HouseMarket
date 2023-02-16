// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDeB_HDXwtiSSxuuxpZ4U9TP3FlzyQ55bI",
  authDomain: "housemarket-8d841.firebaseapp.com",
  projectId: "housemarket-8d841",
  storageBucket: "housemarket-8d841.appspot.com",
  messagingSenderId: "427357573841",
  appId: "1:427357573841:web:d246514ee94457076cabf0",
  measurementId: "G-E05D8D5575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();