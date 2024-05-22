import { getAuth, app, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { createContext } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{
    const googleProvider = new GoogleAuthProvider();
     
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const authInfo = {googleLogin};
    return(
    <AuthContext.Provider 
    value ={authInfo}>{children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;