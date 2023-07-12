// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQHnH4wAkeRi9US5UR-v4ECgIhluunh1s",
  authDomain: "home-decor-35c92.firebaseapp.com",
  projectId: "home-decor-35c92",
  storageBucket: "home-decor-35c92.appspot.com",
  messagingSenderId: "619431728877",
  appId: "1:619431728877:web:ce6c1517e76a2754fc5ee4",
  measurementId: "G-D17FSNMP1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);