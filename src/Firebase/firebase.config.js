// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7iKtVtir4E7EMVw-2Jasmo-UtASynwYo",
  authDomain: "aj-product-shope.firebaseapp.com",
  projectId: "aj-product-shope",
  storageBucket: "aj-product-shope.firebasestorage.app",
  messagingSenderId: "734688517497",
  appId: "1:734688517497:web:251af03117e86ce6bf63a8",
  measurementId: "G-TJZMR1TXC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;