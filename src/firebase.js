import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGb0nkczujcLItFPe7qCDWvW3dhmnuy8M",

  authDomain: "auth-dev-8ea5e.firebaseapp.com",

  projectId: "auth-dev-8ea5e",

  storageBucket: "auth-dev-8ea5e.appspot.com",

  messagingSenderId: "994798524179",

  appId: "1:994798524179:web:38047b993555bf3bcf6ce6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
