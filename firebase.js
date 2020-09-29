import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC7wAdlgT3F3knDkA1mZDuSU-S3_itUTAY",
  authDomain: "bt3103-71779.firebaseapp.com",
  databaseURL: "https://bt3103-71779.firebaseio.com",
  projectId: "bt3103-71779",
  storageBucket: "bt3103-71779.appspot.com",
  messagingSenderId: "1066340694797",
  appId: "1:1066340694797:web:4aade938955954bc018e44",
  measurementId: "G-SH0ZC07CPE"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
