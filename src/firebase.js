// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD_VYze6tr-vXarwKvuv1yCglm4GvD-5M",
  authDomain: "img-gallery-hng.firebaseapp.com",
  projectId: "img-gallery-hng",
  storageBucket: "img-gallery-hng.appspot.com",
  messagingSenderId: "984611263300",
  appId: "1:984611263300:web:e37215db9f2edefa113d11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
