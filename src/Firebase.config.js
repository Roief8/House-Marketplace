// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_G2bzJ94xuNAxnvvqtTmmBXYKRKY0yfg",
  authDomain: "house-marketplace-app-re-a108d.firebaseapp.com",
  projectId: "house-marketplace-app-re-a108d",
  storageBucket: "house-marketplace-app-re-a108d.appspot.com",
  messagingSenderId: "560346746088",
  appId: "1:560346746088:web:f38d4ce12aed30d9f04d5d",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
