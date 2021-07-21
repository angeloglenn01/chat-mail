import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA1WXYIt8gxyznxHsVUdBvlbgdwKatRUCc",
  authDomain: "chat-mail-fa17e.firebaseapp.com",
  projectId: "chat-mail-fa17e",
  storageBucket: "chat-mail-fa17e.appspot.com",
  messagingSenderId: "775756383572",
  appId: "1:775756383572:web:8c3652418056d9bf42b4c1",
  measurementId: "G-TCVTKB10RP"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;