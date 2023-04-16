// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import 'firebase/compat/auth';
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuJzhB-yq0DEGtbi7mvdrhdlxL7CaA66k",
  authDomain: "myblogsite-3657a.firebaseapp.com",
  projectId: "myblogsite-3657a",
  storageBucket: "myblogsite-3657a.appspot.com",
  messagingSenderId: "603300153577",
  appId: "1:603300153577:web:93fbc5b6420b597cb38878",
  measurementId: "G-DHK04M63N3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
const DB = getFirestore(app);
console.log("DBDB",DB);
export default DB;
// const analytics = getAnalytics(app);
