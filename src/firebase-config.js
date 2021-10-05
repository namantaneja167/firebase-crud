// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyDydxSh4CHazi7ECET6c8Iww5L3EYqIYIw",
    authDomain: "firestore-tutorial-f0824.firebaseapp.com",
    projectId: "firestore-tutorial-f0824",
    storageBucket: "firestore-tutorial-f0824.appspot.com",
    messagingSenderId: "700177863980",
    appId: "1:700177863980:web:41d3e6e52794cb468a0889",
    measurementId: "G-YC8E81P2NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
