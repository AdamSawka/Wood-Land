import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCfUlwrZxjrZNw0AyCyDwwxCl8Jn_lNwk4",
  authDomain: "woodland-15c59.firebaseapp.com",
  projectId: "woodland-15c59",
  storageBucket: "woodland-15c59.appspot.com",
  messagingSenderId: "1013135202801",
  appId: "1:1013135202801:web:83303817486fb26ba50c50"
})

export const auth = app.auth()
export default app
