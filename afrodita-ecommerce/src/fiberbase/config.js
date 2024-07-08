// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTtehKdGQaHMr1HbqDKTexmMqbm_5m1_g",
  authDomain: "proyectofinal-carabajalreact.firebaseapp.com",
  projectId: "proyectofinal-carabajalreact",
  storageBucket: "proyectofinal-carabajalreact.appspot.com",
  messagingSenderId: "35781910624",
  appId: "1:35781910624:web:3c533c37c94abbfbfee305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app);