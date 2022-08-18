import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"; 
import {auth} from "./base";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <UserContext.Provider value={{createUser, signIn}}>
            {children}
        </UserContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(UserContext);
};