import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//new

const firebaseConfig = {
    apiKey: "AIzaSyCGVN3Z23z0fT2FnFi-TXffS0utKus5tEU",
    authDomain: "todo-appweb.firebaseapp.com",
    projectId: "todo-appweb",
    storageBucket: "todo-appweb.appspot.com",
    messagingSenderId: "285601121870",
    appId: "1:285601121870:web:838195b8fc9a69c6aca51f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  export default firebase;