import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrQwbSTJe2tQji5BMR6aFpxWklvzANLYQ",
  authDomain: "crud-app-66106.firebaseapp.com",
  projectId: "crud-app-66106",
  storageBucket: "crud-app-66106.firebasestorage.app",
  messagingSenderId: "39448046424",
  appId: "1:39448046424:web:1542d7d26f2bef1208132d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
