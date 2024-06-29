// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76ExmVJVw8R7_CVbm7pwHDN9UvkSrHvM",
  authDomain: "userauthentication-fb4b1.firebaseapp.com",
  projectId: "userauthentication-fb4b1",
  storageBucket: "userauthentication-fb4b1.appspot.com",
  messagingSenderId: "313257265657",
  appId: "1:313257265657:web:d47c3a2762525058815528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};