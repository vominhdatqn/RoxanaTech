// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC28VOEc8r9SB8wzBtb7G8Lm1SZtILbOUM",
//   authDomain: "roxanatech-b0ed3.firebaseapp.com",
//   projectId: "roxanatech-b0ed3",
//   storageBucket: "roxanatech-b0ed3.firebasestorage.app",
//   messagingSenderId: "187987766271",
//   appId: "1:187987766271:web:73ddfeba946a1abb77d5ca",
//   measurementId: "G-EM2RG91DPN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyC28VOEc8r9SB8wzBtb7G8Lm1SZtILbOUM",
    authDomain: "roxanatech-b0ed3.firebaseapp.com",
    projectId: "roxanatech-b0ed3",
    storageBucket: "roxanatech-b0ed3.firebasestorage.app",
    messagingSenderId: "187987766271",
    appId: "1:187987766271:web:73ddfeba946a1abb77d5ca",
    measurementId: "G-EM2RG91DPN"
  };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
// const storage = getStorage(app)
// const analytics = getAnalytics(app);

// export
export { firestore, app };