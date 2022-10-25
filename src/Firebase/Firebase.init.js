import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgiWc3KltIF0nWaz9_9oa9dj1fE1CP2nA",
  authDomain: "edukite-363fa.firebaseapp.com",
  projectId: "edukite-363fa",
  storageBucket: "edukite-363fa.appspot.com",
  messagingSenderId: "936756504630",
  appId: "1:936756504630:web:2cf11670edd8235f921097"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;