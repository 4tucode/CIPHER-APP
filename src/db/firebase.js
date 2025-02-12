import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDxqU8US1Abrzylx9M3n-mOEdT8Dxf7tcM",
  authDomain: "cipher-app-766bf.firebaseapp.com",
  projectId: "cipher-app-766bf",
  storageBucket: "cipher-app-766bf.firebasestorage.app",
  messagingSenderId: "457825338469",
  appId: "1:457825338469:web:17e820f78d820fe600728c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export { auth, db }