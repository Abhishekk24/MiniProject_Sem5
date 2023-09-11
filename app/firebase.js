// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKopkPk36nrADRKzlNFtnnvKPNBnMT8Jw",
  authDomain: "warehouse-auth-3ba70.firebaseapp.com",
  projectId: "warehouse-auth-3ba70",
  storageBucket: "warehouse-auth-3ba70.appspot.com",
  messagingSenderId: "32250165094",
  appId: "1:32250165094:web:6e0bbceeee3975a8317aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
