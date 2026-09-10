import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPDDnwkpbFpxcj_zFmXPnZjipn_UC9zJ0",
  authDomain: "appsaude-4f29e.firebaseapp.com",
  projectId: "appsaude-4f29e",
  storageBucket: "appsaude-4f29e.firebasestorage.app",
  messagingSenderId: "10523698091",
  appId: "1:10523698091:web:17a7d76b2a508fdea9e8ee",
  measurementId: "G-N01G8CEWD4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);