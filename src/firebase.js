import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {

  apiKey: "AIzaSyDCT0tTW606cQqVqSNb_08pKeoB6ACubO4",

  authDomain: "e-clone-9ff60.firebaseapp.com",

  projectId: "e-clone-9ff60",

  storageBucket: "e-clone-9ff60.appspot.com",

  messagingSenderId: "947413768969",

  appId: "1:947413768969:web:934dcd1055752c03cf51d8",

  measurementId: "G-BLEC1X3J2Y"

};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}