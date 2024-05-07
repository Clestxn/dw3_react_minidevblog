import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWITSopuKDfk2FXDJfSscRYmQ1nzE83eY",
  authDomain: "minidevblogfelipe.firebaseapp.com",
  projectId: "minidevblogfelipe",
  storageBucket: "minidevblogfelipe.appspot.com",
  messagingSenderId: "344657334758",
  appId: "1:344657334758:web:0a4faf38be15839246c627",
  measurementId: "G-1J8RG9864H"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}