import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDcV8PfHcs8CGWWYzhyd4UsCx1b3tgOZpE",
  authDomain: "coder-e-commerce-1941e.firebaseapp.com",
  projectId: "coder-e-commerce-1941e",
  storageBucket: "coder-e-commerce-1941e.appspot.com",
  messagingSenderId: "449260243858",
  appId: "1:449260243858:web:8e51fec781023f66d48f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
 export default db;

