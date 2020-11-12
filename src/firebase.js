import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBVDwVgkbV9_JtGJ_jhKux_A54kjJWvMFo",
    authDomain: "amongus-chat.firebaseapp.com",
    databaseURL: "https://amongus-chat.firebaseio.com",
    projectId: "amongus-chat",
    storageBucket: "amongus-chat.appspot.com",
    messagingSenderId: "1047940641751",
    appId: "1:1047940641751:web:1a524baa3889f157391192",
    measurementId: "G-3VNDMSEM8X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db , provider };