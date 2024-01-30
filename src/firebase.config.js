// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAtEnzMSTw6iBx8fwpiWfp0Kb0eCCA36AI",
  authDomain: "viqtech-electronics.firebaseapp.com",
  projectId: "viqtech-electronics",
  storageBucket: "viqtech-electronics.appspot.com",
  messagingSenderId: "165179662062",
  appId: "1:165179662062:web:16d892ab3caf76feac5dff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
