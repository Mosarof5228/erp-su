// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwLo9FqsZVYCjnJpHDHt63J-OibiLuTXY",
  authDomain: "erp-su.firebaseapp.com",
  projectId: "erp-su",
  storageBucket: "erp-su.appspot.com",
  messagingSenderId: "311888508303",
  appId: "1:311888508303:web:ef206a9ad240a03f5187fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;