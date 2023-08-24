// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeFirestore} from 'firebase/firestore'
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc, collection, getDocs, query, writeBatch, updateDoc } from "firebase/firestore"

import { getDatabase, ref, child, push, update } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6L9RH2hYlyWVEf862CwfAU3H4vTZc74",
  authDomain: "netflix-clone-f29f4.firebaseapp.com",
  projectId: "netflix-clone-f29f4",
  storageBucket: "netflix-clone-f29f4.appspot.com",
  messagingSenderId: "34690401125",
  appId: "1:34690401125:web:7c0dc2f3ca40be5b4b178c",
  measurementId: "G-YJLKJY4XCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// profile_schema == profiles: [{
//   profile: {
//     name: "0", 
//     img: "0",
//     movies: {watching: []}
//   }
// }]


export const auth = getAuth()
export const db = initializeFirestore(app, {useFetchStreams: false});

export async function createUserWithEmailPassword(email, password){
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return response
  } catch(error){
    if(error.code === "auth/email-already-in-use"){
      throw new Error("auth/email-already-in-use");
    }
  }
}

export async function signInWithEmailPassword(email, password){
   try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response
   } catch(error){
    if(error.code === "auth/user-not-found"){
      throw new Error('auth/user-not-found');
    }
   }
}


export async function createUserDocumentFromAuth(userAuth, data){
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const create = await setDoc(userDocRef, {
      'email': userAuth.email,
      profiles: [{
        profile: {
          name: "profile 1",
          img: "0",
          movies: {watching: []}
        }
      }]
    })
  }
  return userSnapshot
}

export async function StoreData(collectionKey, arrayOfObjects, userId){
  console.log("CHegusdiaudj")
  //ColectionKey == collection name
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  arrayOfObjects.forEach(object => {
    console.log(object)
    const docRef = doc(collectionRef, userId)
    batch.set(docRef, object)
  });
  await batch.commit()
}

export async function updateDocument(userId, updateObject) {
  try {
    const docRef = doc(collection(db, "users"), userId);
    await updateDoc(docRef, updateObject);
    console.log('Document updated successfully.');
  } catch (error) {
    console.error('Error updating document:', error);
  }


}

export async function getUserData(userId){
  const docRef = doc(collection(db, "users"), userId);
  const docSnapshot = (await getDoc(docRef)).data();
  return docSnapshot
}

export async function getUserImage(){

  const docRef = doc(collection(db, "images"), "aW14a2RXw3EbTW3jaqeS");
  const docSnapshot = (await getDoc(docRef)).data();
  return docSnapshot
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const signOutUser = async () => await signOut(auth);