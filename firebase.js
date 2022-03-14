// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPsjUA2xELyFQidxQbqcgq4fagFLLuUjg',
  authDomain: 'arabi-6b517.firebaseapp.com',
  projectId: 'arabi-6b517',
  storageBucket: 'arabi-6b517.appspot.com',
  messagingSenderId: '55385584923',
  appId: '1:55385584923:web:1f314786994401cfa9cfbe',
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
// export const auth = getAuth();
export const storage = getStorage(app);
