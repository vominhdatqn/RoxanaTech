import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCScj_PXo5qzgazwseJPs47ro8BpbS0y84",
    authDomain: "roxanatech-b4c96.firebaseapp.com",
    projectId: "roxanatech-b4c96",
    storageBucket: "roxanatech-b4c96.appspot.com",
    messagingSenderId: "556483432220",
    appId: "1:556483432220:web:049afa00131bf7a6bbf4d9",
    measurementId: "G-XN9H65LF3W"
  };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// export
export { firestore };
