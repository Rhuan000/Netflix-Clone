// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6L9RH2hYlyWVEf862CwfAU3H4vTZc74",
  authDomain: "netflix-clone-f29f4.firebaseapp.com",
  projectId: "netflix-clone-f29f4",
  storageBucket: "netflix-clone-f29f4.appspot.com",
  messagingSenderId: "34690401125",
  appId: "1:34690401125:web:7c0dc2f3ca40be5b4b178c",
  measurementId: "G-YJLKJY4XCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
