import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZxojWx1Quh8Hno3PbOQKacWuWBA-xDwI",
    authDomain: "slack-clone-e7394.firebaseapp.com",
    projectId: "slack-clone-e7394",
    storageBucket: "slack-clone-e7394.appspot.com",
    messagingSenderId: "358091466937",
    appId: "1:358091466937:web:61e202a527778c60e25368"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };