// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtAWc8iyfms6NYf6Yuhck4TzgOKnMhW8",
  authDomain: "ceritaku-group.firebaseapp.com",
  projectId: "ceritaku-group",
  storageBucket: "ceritaku-group.appspot.com",
  messagingSenderId: "835506375304",
  appId: "1:835506375304:web:e04aad40c18e0fc885ad3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();