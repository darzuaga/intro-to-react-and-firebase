require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDHfG3evfaN9wVNodr4_q098UB6XMqcXvA",
    authDomain: "react-intro-blog.firebaseapp.com",
    databaseURL: "https://react-intro-blog.firebaseio.com",
    projectId: "react-intro-blog",
    storageBucket: "react-intro-blog.appspot.com",
    messagingSenderId: "255270185978",
    appId: "1:255270185978:web:43b5fb58b2bc7120375243"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db;