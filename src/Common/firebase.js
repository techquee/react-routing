import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBaRgsnciPu011d5F8wJI984znCn7r8Ytc",
    authDomain: "react-77f10.firebaseapp.com",
    databaseURL: "https://react-77f10.firebaseio.com",
    projectId: "react-77f10",
    storageBucket: "react-77f10.appspot.com",
    messagingSenderId: "301057595157",
    enableRedirectHandling: false
  };

  firebase.initializeApp(config);
export const db = firebase.database();