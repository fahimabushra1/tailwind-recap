import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { app} from "../fireBase/fireBase.config";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

 const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 };

 const logout =()=>{
    return signOut(auth);
 }


    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                console.log(currentUser);

            }
        })
        return ()=>{
            return unsubscribe();
        }
    }),[];

    const authInfo = {user,createUser,signIn,logout,googleLogin};
    return(
    <AuthContext.Provider 
    value ={authInfo}>{children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;