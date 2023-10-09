// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import admin from "firebase-admin";
import { initializeApp, getApps, cert } from 'firebase-admin/app';


const serviceAccount = require('./accountService.json')

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
// const firebaseAdminConfig = {
//     credential: cert({
//         projectId: "mardoll-studio",
//         clientEmail: "firebase-adminsdk-ju0w5@mardoll-studio.iam.gserviceaccount.com",
//         privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGb9eEZIeUPod/\nL8740jVbTZ5dMuXjQX23Hp61XYj3QC0fxwAs7zPwkmArW3Y1ibhfDPwuXhxm316P\nSP4JJfjc0KVSGR5VxbO2dLVpjYJ8tDAl7k+FOj+lWGE49mXSGUVWs4CtyZZ4tYSm\nVD0deinXFH+eTpBW1bpWfEHg1NLnUUjTTd+3JchfL42UuQ2G6AClAk1Tb2i8o/fK\nKXkg7OcD5StPmdU1I00JB2DdYm+1jKiZE25Q5Q9EvlvalNb2oFNbuN/uDZEYwCZg\nU5zug150Nb1cBrNSJnvpTT6MsrhambVHQuwS42Uuz5UJOyTfP01pkSG+fe/crNU4\nxMj6eQWxAgMBAAECggEACyvZtLTaIyDgDOt6mexvn4u/mhyW75PMyYXaRniVEOJW\nh/7yhhUTVfxPmLFF9t6heAxpmAypSatSjft8fbRbDcdbP0N1vztpkiCA5AfY7D9S\npJgFdwkf8yWGF6hbdBgDHM3vNRlvtKz3YkvEwweRGnAnfRiMLK9MlbjaFpe0pdwG\ni5HeChto+fKvN81RzOUFeQNJjapbl8fqXB5dRh5tD44aeI/uUj6EUAo0GiWMQkyP\nWe7/eVf5vfddY6GxMrFIg5R3yaNDa8lvSPUv/WWcM8MwGCWyIznxuys3gnTHozl6\nJh3dO+L90ewoQOn589msA1J+4sdTzhZT+Cpf8H5oYQKBgQD/ZvV53A6Vu1K3LQli\na4ekXX0smw3jUItYjrbqgcqZRDMWIZBJ1JBcKH3fQD/D8OPpAGtIzh6Dwt6U1KJ8\njB4Bum6g2ED3pArKhZmHvhLp4xoaUzru9o7z9+MIUK5DsjohKq43UmPnopfKdjOc\nJGYALlQfkS2yhH1iTktAu6W7eQKBgQDG5r+aI9huqz25Q4iP7WulGQNn6eTixYjG\nXRWNcXbNsrWD+ln4lCx9CHe7zfAqGKEAXmIJzVWc9kMLVYbizWuUob4GvH7q6WQj\nLGVvdGVhoh18Sy2mqnptL9TPq3dRX+RA6UTaYGHzyaBPKo1+Q70s1BhklQfmGO5B\nuLxX/xrV+QKBgQCEyOnNXmyyyj55/89GPTO7b+O5gi/ZRDH+a8yL5ckIoF2THwYe\nbIZVc7Plk0jTvXUw2cfthUR2KqWAaYDFEjAzo9MKiwRT/BSkMIue+GJq+WjD0Qvt\n24B9NR7zXscLaSkxvzfuiUZp0q3qVEQG5SGm7G9OLjO9AYcSyjPzxtumuQKBgH9i\nAIvDMTWPTfR8n9UthKczoc7HKONjBvmjW84+QIv0S/O+PijJHMTmy2fnuEv9gf8u\nczM74fyoar+zgrN2Q9Po0j6WMeJYnt037a63qMYigSe9LftzavzKiUyGz9+5vgEk\nZAhHefQbySNqaTvYPiubmhOwrmJazRwiJ91jb9hhAoGAKTAPxudfeIGAIoHotRsx\nd0WMxm6pwYFy9wRgR0CInNrhrFMaAfKPqIKRrNgXX4KE7iX3Mx37i9Ex+y0fkRoY\nA4QGjrzKYR2dT6wFp3+bA32BaFsoT3ETzqZRqWt++aDocMC6/EYqRDFxKnOTwVi1\nvmUHtwICj5crof8IPvRJfB4=\n-----END PRIVATE KEY-----\n"
//     })
// }

if (!getApps().length) {
    if (getApps().length <= 0) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })
        // initializeApp(firebaseAdminConfig);
    }
}
const adminDb = admin.firestore();

export { adminDb }

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app);

// // export
// export { firestore, analytics, admin };
