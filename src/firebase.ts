import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjhCP_gwD5paq6Iz_TUVUPmu9mG8jcFzg",

  authDomain: "task-manager-fc302.firebaseapp.com",

  projectId: "task-manager-fc302",

  storageBucket: "task-manager-fc302.firebasestorage.app",

  messagingSenderId: "781510338047",

  appId: "1:781510338047:web:9df04287187b98d6c273ca",
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
