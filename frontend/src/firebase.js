// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBjUutH0_TRy8C8x4-pNjuxPculvOYDaUo",
    authDomain: "disneyplus-clone-8ef30.firebaseapp.com",
    projectId: "disneyplus-clone-8ef30",
    storageBucket: "disneyplus-clone-8ef30.appspot.com",
    messagingSenderId: "56712924194",
    appId: "1:56712924194:web:3ee39f47902c93cfd24e7b",
    measurementId: "G-TGHH33FM7B"
  };
  
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  // const storage=firebase.storage();

  export{auth,provider};
  export default db;