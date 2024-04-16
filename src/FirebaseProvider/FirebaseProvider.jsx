import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

export const AuthContext=createContext(null)


//social auth provider

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    // console.log(user)
    //createUser
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (name,image) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
         setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //github login
    const githubLogin = () => {
         setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //log out
    const logOut = () => {
        toast('logged out')
        setUser(null)
    signOut(auth)
    }

    //login user observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        
            if (user) {
                setUser(user)
                 setLoading(false)
            }   
           
        })
        return () => unsubscribe();
    },[])

    
    const allValues = {
    
        createUser, 
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        updateUserProfile,
        user,
        loading,
}

    return (
        <AuthContext.Provider value={allValues}>
          {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;