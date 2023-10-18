import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCws9TMvybHQuJ4VnrQVU52YmAk5act6H8",
  authDomain: "miniblog-1cc3e.firebaseapp.com",
  projectId: "miniblog-1cc3e",
  storageBucket: "miniblog-1cc3e.appspot.com",
  messagingSenderId: "351024012260",
  appId: "1:351024012260:web:d68b8e1d5d16177de1c5f1"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)