import firebase from  "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBGu3Kd7k9B2mkgtjuM42wupKGZZgiFvSY",
    authDomain: "chat-application-19394.firebaseapp.com",
    projectId: "chat-application-19394",
    storageBucket: "chat-application-19394.appspot.com",
    messagingSenderId: "513630177698",
    appId: "1:513630177698:web:b27484f12f0121353c8afb"
  }).auth();