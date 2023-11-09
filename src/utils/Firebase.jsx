// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCMmno0jOPXr2_y_01fGB-wbujdRiPffWE",
  authDomain: "ecommerceapp-6485f.firebaseapp.com",
  projectId: "ecommerceapp-6485f",
  storageBucket: "ecommerceapp-6485f.appspot.com",
  messagingSenderId: "379546478833",
  appId: "1:379546478833:web:4b18d9f3628a8e19bf6150",
  measurementId: "G-B7V8T3CEB3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
