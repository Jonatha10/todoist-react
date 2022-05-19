import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmhDC5_AT3WTx7ESPAS7nHxNzbXnM6F7Y",
  authDomain: "todo-crud-9fe79.firebaseapp.com",
  projectId: "todo-crud-9fe79",
  storageBucket: "todo-crud-9fe79.appspot.com",
  messagingSenderId: "290821957933",
  appId: "1:290821957933:web:ffd129749ffedfab164ba4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
