import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhDdgnQEtUunLgqcR3v8BHx3ZSjFs4LcU",
    authDomain: "todo-app-v1-tdv1.firebaseapp.com",
    projectId: "todo-app-v1-tdv1",
    storageBucket: "todo-app-v1-tdv1.appspot.com",
    messagingSenderId: "1068304365213",
    appId: "1:1068304365213:web:39fdf1eaee291724cbc674",
    measurementId: "G-RWXP8LEG76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;