import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    query, where, orderBy,
    serverTimestamp,
    getDoc, //grabs single doc
    updateDoc, //updates doc
} from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth' //authentication fun import

const firebaseConfig = {
    apiKey: "AIzaSyD9kBpuggn5GYDyZmyFZxCCcDrqf8rHg4c",
    authDomain: "demoproject-4ca45.firebaseapp.com",
    projectId: "demoproject-4ca45",
    storageBucket: "demoproject-4ca45.appspot.com",
    messagingSenderId: "494337793763",
    appId: "1:494337793763:web:c83f9c4cc11f56703cafd6",
    measurementId: "G-Q6RGGVY8DZ"
  };

  // init firebase app
initializeApp(firebaseConfig);


// init services
const db = getFirestore();
const auth = getAuth(); //sign-in

//get a reference to the collection

const colRef = collection(db,'recipes');
// query a specific document
const q = query(colRef,
// where("author","==","Eric"),
orderBy('createdAt'));
// q can be passed instead of colRef to get updated snapshots filtered to the
// specific user search


//get and console log collection data

// getDocs(colRef) //gets array of documents (promise returns a snapshot of current)
//   .then(snapshot=>{

//     let Books = [];
//     snapshot.docs.forEach(
//       doc => Books.push({title: doc.data().title, author: doc.data().author, id: doc.id})
//     );
//     console.log(Books);
//   })
//   .catch(err=>console.log(err.message));

  //Fires callback everytime there is a change in collection
  onSnapshot(q,snapshot=>{
    let Books = [];
    snapshot.docs.forEach(
      doc => Books.push({
        title: doc.data().title, 
        author: doc.data().author, 
        id: doc.id,
        createdAt: doc.data().createdAt})
    );
    console.log(Books);
  });

  //adding documents
  const addRecipeForm = document.querySelector('.add');
  addRecipeForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    addDoc(colRef,{
      title: addRecipeForm.title.value,
      author: addRecipeForm.author.value,
      createdAt: serverTimestamp()})
    .then(()=>addRecipeForm.reset());


  });

  //deleting documents
  const removeRecipeForm = document.querySelector('.delete');
  removeRecipeForm.addEventListener('submit',(e)=>{
    e.preventDefault();

      //notice we are allowed to dot-call form inputs where the input has an assigned
      // name, such as name=id.
    const doc2delete = doc(db,'recipes',removeRecipeForm.id.value);

    deleteDoc(doc2delete)
    .then(()=>{
      removeRecipeForm.reset()});
    });

// get single doc

const docref = doc(db,'recipes','jTiaN9icV9uUPyGGMMFB');
// getDoc(docref)
// .then(document => console.log(document.data(), document.id));

onSnapshot(docref,doc=>console.log(doc.data(),doc.id));

//updating a Document
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit',e=>{
  e.preventDefault();

  const docref = doc(db,'recipes',updateForm.id.value);


  updateDoc(docref,{
    title: 'updated title'
  })
  .then(()=>updateForm.reset()); //only updates keyed values that are passed in


});

//sign users up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  createUserWithEmailAndPassword(auth,email,password)
    .then((cred) => {
      console.log('user created:',cred.user);
      signupForm.reset();
    })
    .catch(err=>alert(err.message));
  
});

//login & logout
const login = document.querySelector('.login');
login.addEventListener('submit',e=>{
  e.preventDefault();
  const email = login.email.value;
  const password = login.password.value;
  signInWithEmailAndPassword(auth,email,password)
  .then((cred)=>console.log('signedin',cred))
  .catch(err => alert(err.message));
  
});

const logout = document.querySelector('.logout');
logout.addEventListener('click',()=>{
  signOut(auth)
  .then(()=>console.log('signed out'));

});

//subscribing to auth changes
onAuthStateChanged(auth, user => {
  console.log('user status changed: ', user)
});

///to unsubscribe from changes (eg. snapshots or changes):

// add "const unsubX = " to async functions that return snapshots/changes

// (These functions all return an unsubscribe function)

// Then simply call those assigned variables

// For example:

// const unsubK = onSnapshot(docref,doc=>console.log(doc.data(),doc.id));
// unsubK();

// the onSnapshot contains to operate normally before unsub is called