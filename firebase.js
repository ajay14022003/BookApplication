// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVRhGDGig7_uKSGilM6Ck2W3mU95mNjEg",
  authDomain: "book-store-c6daa.firebaseapp.com",
  databaseURL: "https://book-store-c6daa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-store-c6daa",
  storageBucket: "book-store-c6daa.appspot.com",
  messagingSenderId: "1054258180627",
  appId: "1:1054258180627:web:555ec1ced7055ec51c05e6",
  measurementId: "G-NRPP8VYJZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);