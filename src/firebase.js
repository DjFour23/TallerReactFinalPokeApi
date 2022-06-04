// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZsMwRPbLVJ0E76ODCH-bAJBK_qp-cLw",
  authDomain: "pokeapibuenaspracticas.firebaseapp.com",
  projectId: "pokeapibuenaspracticas",
  storageBucket: "pokeapibuenaspracticas.appspot.com",
  messagingSenderId: "500306117461",
  appId: "1:500306117461:web:4d2bff65e6689d19b4a5dc",
  measurementId: "G-3GDMVNC040"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}