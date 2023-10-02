// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfdGcSHRPc0vIW3ZDdojlhx2jNZUGogso",
  authDomain: "auth-connection-recap.firebaseapp.com",
  projectId: "auth-connection-recap",
  storageBucket: "auth-connection-recap.appspot.com",
  messagingSenderId: "293343135576",
  appId: "1:293343135576:web:a1ef013f838b13351d872d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;