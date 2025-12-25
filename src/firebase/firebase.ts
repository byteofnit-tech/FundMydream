import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBXNBfg569cuYMY5Pz--I_YKSExn4OVwwg",
  authDomain: "fundmydream-88669.firebaseapp.com",
  projectId: "fundmydream-88669",
  storageBucket: "fundmydream-88669.appspot.com",
  messagingSenderId: "1075780929852",
  appId: "1:1075780929852:web:ba7f5fb40fbabd020f3639",
};

const app = initializeApp(firebaseConfig);

// ✅ THESE WERE MISSING
export const auth = getAuth(app);
export const db = getFirestore(app);
