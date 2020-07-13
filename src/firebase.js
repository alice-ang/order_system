 import firebase from "firebase/app";
 import 'firebase/firestore'
import 'firebase/auth'

 const config = {
    apiKey: "AIzaSyAFgb4oTDg5ZEmSvicNrUTMFPih8nnD1KU",
    authDomain: "order-system-410cd.firebaseapp.com",
    databaseURL: "https://order-system-410cd.firebaseio.com",
    projectId: "order-system-410cd",
    storageBucket: "order-system-410cd.appspot.com",
    messagingSenderId: "1060896739829",
    appId: "1:1060896739829:web:3afe3cddead2b557fa90bc"
 }

 firebase.initializeApp(config)
 const db = firebase.firestore();
 export const firebaseAuth = firebase.auth()
 export const dbMenuRef = db.collection('menu')
 export const dbOrdersRef = db.collection('orders')
