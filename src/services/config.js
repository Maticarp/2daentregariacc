import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "mia-tienda-1835e.firebaseapp.com",
  projectId: "mia-tienda-1835e",
  storageBucket: "mia-tienda-1835e.appspot.com",
  messagingSenderId: "456346847565",
  appId: "1:456346847565:web:60f9adcad0b8b2bbb44f04"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);