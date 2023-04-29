import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const signIn = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
        setLoading(true)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const signout = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])

    const authInfo ={
        user,
        loading,
        signIn,
        logIn,
        signout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;