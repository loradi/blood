
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA3TFDsjaJEaA9QVyn1LyDPdbzkJ6kDzyY",
    authDomain: "blood-1ea0c.firebaseapp.com",
    databaseURL: "https://blood-1ea0c.firebaseio.com",
    projectId: "blood-1ea0c",
    storageBucket: "blood-1ea0c.appspot.com",
    messagingSenderId: "961140727538"
  };
  firebase.initializeApp(config);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('usuarios');