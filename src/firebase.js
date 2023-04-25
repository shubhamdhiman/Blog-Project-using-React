
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoa4wQXytZvUz954vxZQVBMNVhf1o95jg",
  authDomain: "react-hooks-blog-e43b6.firebaseapp.com",
  projectId: "react-hooks-blog-e43b6",
  storageBucket: "react-hooks-blog-e43b6.appspot.com",
  messagingSenderId: "728527833423",
  appId: "1:728527833423:web:a25bd5e5b718bb9b745d3a"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
// firebase.initializeApp()
// export const firestore = firebase.firestore()