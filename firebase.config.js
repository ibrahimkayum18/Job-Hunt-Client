// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_kJ_asTQXZBuE-Mu1jV5KUPsM0RmrVU",
  authDomain: "job-hub-c6b58.firebaseapp.com",
  projectId: "job-hub-c6b58",
  storageBucket: "job-hub-c6b58.appspot.com",
  messagingSenderId: "912060510268",
  appId: "1:912060510268:web:da296dfd8598661b11d339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;