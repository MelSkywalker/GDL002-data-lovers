
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClcN3ZLLD0g9YpLtFR6qnHvrF9ZOz_50w",
    authDomain: "data-lovers.firebaseapp.com",
    databaseURL: "https://data-lovers.firebaseio.com",
    projectId: "data-lovers",
    storageBucket: "data-lovers.appspot.com",
    messagingSenderId: "1006521785248"
  };
  firebase.initializeApp(config);

  const auth = firebase.auth();
  const db = firebase.firestore();
