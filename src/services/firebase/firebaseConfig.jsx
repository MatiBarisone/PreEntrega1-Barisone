import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyRXUjawPVpFetTBt3H20u543l8uGsfeo",
  authDomain: "raijin-streetwear.firebaseapp.com",
  projectId: "raijin-streetwear",
  storageBucket: "raijin-streetwear.appspot.com",
  messagingSenderId: "353428460625",
  appId: "1:353428460625:web:469aa539775bddfba71470"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)