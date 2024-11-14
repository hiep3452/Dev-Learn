import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase của ứng dụng web
const firebaseConfig = {
    apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "devlearn-f2703.firebaseapp.com",
    projectId: "devlearn-f2703",
    storageBucket: "devlearn-f2703.firebasestorage.app",
    databaseURL: "https://devlearn-f2703-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "675420268590",
    appId: "1:675420268590:web:31cc1203248c80f02157bf",
    measurementId: "G-WFYWWD5LFD"
  };
  

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };
