import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';



const firebaseConfig = {
  apiKey: "AIzaSyBwaVqk8z3IY34XxsCzyqLt1x4HTYoq9PU",
  authDomain: "my-progrem-word.firebaseapp.com",
  databaseURL: "https://my-progrem-word-default-rtdb.firebaseio.com",
  projectId: "my-progrem-word",
  storageBucket: "my-progrem-word.appspot.com",
  messagingSenderId: "258918215912",
  appId: "1:258918215912:web:8ca83a0bc664fa83d4995d",
  measurementId: "G-2EBX166Q3R"
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'words')

//get collection data 
getDocs(colRef)
  .then((snapshot) => {
    let words = []
    snapshot.docs.forEach((doc) => {
      words.push({ ...doc.data(), id: doc.id})
    })
  console.log(words)
})
.catch(err => {
  console.log(err.message)
})

//add
const addWordsForm = document.querySelector('.add');
addWordsForm.addEventListener("submit", (e) => {
  e.preventDefault()

  addDoc(colRef, {
    names: addWordsForm.names.value
  })
  .then(() => {
    addWordsForm.reset()
  })
})

// const colRef = collection(dataBase, 'words')

// onSnapshot(colRef, (snapshot) => {
//   let words = []
//     snapshot.docs.forEach((doc) => {
//       words.push({...doc.data(), id: doc.id})
//     });
//     console.log(words)
// })




  // Initialize Firebase
    // const apps = initializeApp(firebaseConfig);
    // import {getDatabase, ref, set, child, update, remove, Database}
    // from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js';

    // const db = getDatabase();

    // function inserBest(){
    //   set(ref(db, 'words'), {
    //       names: 77
    //   })
    //   .then(() => {
    //       console.log('data stored Yes');
    //   })
    //   .catch(() => {
    //       console.log('error');
    //   })
    // }
    // inserBest();

export const firebase = initializeApp(firebaseConfig);
export const databases = getFirestore(firebase);
