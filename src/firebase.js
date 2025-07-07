// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9THgTWfWrD89a3Bci5AK4INujiZtBXGA",
  authDomain: "netflix-clone-bf257.firebaseapp.com",
  projectId: "netflix-clone-bf257",
  storageBucket: "netflix-clone-bf257.appspot.com", // fix typo: `.app` → `.com`
  messagingSenderId: "520098661861",
  appId: "1:520098661861:web:cb419c54b5361971059b0c",
  measurementId: "G-0DQS08D2B3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
