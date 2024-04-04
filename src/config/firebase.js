// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { createContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1XAzRdEH0q3sWWcjhGtyXGRrXB6TLC4",
  authDomain: "food-app-7a3c9.firebaseapp.com",
  projectId: "food-app-7a3c9",
  storageBucket: "food-app-7a3c9.appspot.com",
  messagingSenderId: "869864697008",
  appId: "1:869864697008:web:48997b5ac88fe1f2261f75",
  measurementId: "G-KV70J01DLJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

//creating context andd provider
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{ signUp, signIn, signInWithGoogle, signout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

//functions
async function signUp(email, password, name) {
  await createUserWithEmailAndPassword(auth, email, password).then((val)=>{
onAuthStateChanged(auth, (user) => {
  console.log("firebase signup on auth change run");

  if (user) {
    console.log("signup", user, name);
    updateProfile(user, {
      displayName: name,
    });

  }
});
  }).catch((err) => alert(err));
  
}
async function signIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((val) => {
        
      console.log("signin successfully");
    })
    .catch((err) => alert(err));
}
async function signInWithGoogle() {
  await signInWithPopup(auth, googleProvider);
}
async function signout() {
  signOut(auth);
}
