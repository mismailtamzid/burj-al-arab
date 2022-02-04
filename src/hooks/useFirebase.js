import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/firebase.init";




firebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // google sign in
  const googleLogin = () => {
   return signInWithPopup(auth, googleProvider)
  };
  // logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser('');
    }).catch((error) => {
      
    });
    };
    // get currently user signed in
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
  return {
    user,
    error,
    googleLogin,
    logOut,
  };
};

export default useFirebase;
