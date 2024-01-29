import productos_lista from '../js/productos.json' assert { type: 'json'}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC659yUSO6u2ccuSqMIgGXWAULU3jJUoXI",
  authDomain: "ignacio-reactcoder.firebaseapp.com",
  projectId: "ignacio-reactcoder",
  storageBucket: "ignacio-reactcoder.appspot.com",
  messagingSenderId: "1074418397708",
  appId: "1:1074418397708:web:679f05fd0c49b214ecf429",
  measurementId: "G-WG58J6Y1J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

console.log(productos_lista)

const productosRef = collection(db, 'productos')

productos_lista.forEach(item => {
  delete item.id

  addDoc(productosRef, item)
})