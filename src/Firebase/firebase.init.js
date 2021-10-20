import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

export const initializeFirebase = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeFirebase;