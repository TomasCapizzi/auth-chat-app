import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
  "projectId": "auth-7c377",
  "appId": "1:483901012714:web:ae60083980b7caa89bf593",
  "storageBucket": "auth-7c377.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyBohXzJJ8awyEfDPxD_uJSqRdPFinn9W9A",
  "authDomain": "auth-7c377.firebaseapp.com",
  "messagingSenderId": "483901012714"
});

export const fb = firebase;
export const db = firebase.firestore();

/*
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();
*/