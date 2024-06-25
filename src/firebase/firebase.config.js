// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAukx-OVJiTsVwwsx26rytD1CwmmyI_oNc",
    authDomain: "aizas-palace.firebaseapp.com",
    projectId: "aizas-palace",
    storageBucket: "aizas-palace.appspot.com",
    messagingSenderId: "870905056679",
    appId: "1:870905056679:web:c0e164c4fdbf868a323a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;