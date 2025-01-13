import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdt1KOECGCPLRyU75HQ_9Of8brnbT4aBU",
  authDomain: "authentication-user-70dc4.firebaseapp.com",
  projectId: "authentication-user-70dc4",
  storageBucket: "authentication-user-70dc4.firebasestorage.app",
  messagingSenderId: "266757288143",
  appId: "1:266757288143:web:7c8527eab3369caba687ba",
  measurementId: "G-K158FZDXJ6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};