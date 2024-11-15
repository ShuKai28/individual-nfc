// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf6HVZWz4mH8AAcLyQwMTLdMz0039l1PE",
  authDomain: "individual-nfc.firebaseapp.com",
  projectId: "individual-nfc",
  storageBucket: "individual-nfc.firebasestorage.app",
  messagingSenderId: "127385211914",
  appId: "1:127385211914:web:a1ff1a070820e5830ffbf3",
  measurementId: "G-M4B4Q7TJ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
