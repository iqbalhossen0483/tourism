import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Authentication from "./Authentication";

const useFirebase = () => {
    Authentication();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const auth = getAuth();
    //log in with google
    const logInWidthGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    //sign up with email
    const signUpWithEmail = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const addUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    //log in with email
    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //manage user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth])
    //sing out
    const LogOut = () => {
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .catch(err => console.log(err.message))
    }
    return {
        logInWidthGoogle,
        user,
        signUpWithEmail,
        logInWithEmail,
        LogOut,
        isLoading,
        addUserName
    }
};

export default useFirebase;