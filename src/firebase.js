// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAjDBzLGNDN9RldC27MdJ4Xd0m0pzxlCM4",
    authDomain: "clone-2ae01.firebaseapp.com",
    projectId: "clone-2ae01",
    storageBucket: "clone-2ae01.appspot.com",
    messagingSenderId: "958981703214",
    appId: "1:958981703214:web:96db53920872f491d281bf",
    measurementId: "G-ZX6K44GGPM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db, auth };