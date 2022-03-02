import firebase from "firebase"
const config = {
    apiKey: "AIzaSyB1nzWkguYOZKafQ-IQzaBpOPf81dS9Ax0",
    authDomain: "wood-land.firebaseapp.com",
    databaseURL: "https://wood-land-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wood-land",
    storageBucket: "wood-land.appspot.com",
    messagingSenderId: "207461571008"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export {db}
export default firebase;