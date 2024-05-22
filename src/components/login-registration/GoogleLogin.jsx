import googleIcon from "../../assets/images/googleIcon.jpg";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleSignIn = () =>{
        googleLogin()
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn w-full bg-slate-300">
                <div className="flex items-center gap-2">
                    <img className="w-4" src={googleIcon} alt="" />
                    <p className="font-bold">Google</p>
                </div>
            </button>
        </div>
    );
};

export default GoogleLogin;