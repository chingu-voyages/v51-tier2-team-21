
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCidr3GJ0RUze4jj3ahgd7A3q2ivwy3jHU",
  authDomain: "expense-splitter-530f2.firebaseapp.com",
  projectId: "expense-splitter-530f2",
  storageBucket: "expense-splitter-530f2.appspot.com",
  messagingSenderId: "875545759789",
  appId: "1:875545759789:web:6c2d39d1dafa28a0e668a4"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);