import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXQgkScZ76LfTxFTD_FXEFCJUcMPl1ONw",

  authDomain: "pong-387c3.firebaseapp.com",

  databaseURL: "https://pong-387c3-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "pong-387c3",

  storageBucket: "pong-387c3.appspot.com",

  messagingSenderId: "966014780232",

  appId: "1:966014780232:web:ca08b0c22955deae88e97d"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//S'authentifier de manière anonyme
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.uid = user.uid;
  }

})
//console.log(auth);
signInAnonymously(auth).then(() => {
  console.log("All good, you're signed in.");
});

//On récupère l'objet DATABASE
const DATABASE = getDatabase();
//console.log(DATABASE);

//Chemin pour enregistrer les datas.
const path = ref(DATABASE, "/message");

//Ecouteur d'éléments
onValue(ref(DATABASE, "/message"), (snapshot) => {
  const val = snapshot.val();
  //console.log(val);
  //console.log(val);
  window.firebaseValue = val;
});

onValue(ref(DATABASE, "/randomValue"), (snapshot) => {
  const val = snapshot.val();
  window.firebaseValue = val;
});

window.send = (path, objet) => {
  //Ecriture dans la base de donnée
  // const writePath = ref(DATABASE, `/${path}`);
  const pathToWrite = ref(DATABASE, path);
  set(pathToWrite, objet);
};

