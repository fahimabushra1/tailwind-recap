import googleIcon from "../../assets/images/googleIcon.jpg";

const GoogleLogin = () => {
    return (
        <div>
            <button className="btn w-full bg-slate-300">
                <div className="flex items-center gap-2">
                    <img className="w-4" src={googleIcon} alt="" />
                    <p className="font-bold">Google</p>
                </div>
            </button>
        </div>
    );
};

export default GoogleLogin;