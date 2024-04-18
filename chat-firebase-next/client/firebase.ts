import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBr8sY5IvIMnPxiiDSAPapPsZK7OGvLgYg",
    authDomain: "livewell-messenger.firebaseapp.com",
    projectId: "livewell-messenger",
    storageBucket: "livewell-messenger.appspot.com",
    messagingSenderId: "978185283632",
    appId: "1:978185283632:web:09d5384edf0f052ac925f5"
  };


  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
