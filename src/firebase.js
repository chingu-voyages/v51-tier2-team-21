
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0BXsKwqdlJyEbOrcHtl-WwN_G9Ol-bMw",
  authDomain: "expense-splitter-81a9f.firebaseapp.com",
  projectId: "expense-splitter-81a9f",
  storageBucket: "expense-splitter-81a9f.appspot.com",
  messagingSenderId: "415890595926",
  appId: "1:415890595926:web:f4e0187b987766a4311bf7",
  measurementId: "G-8ZQDENECPQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);