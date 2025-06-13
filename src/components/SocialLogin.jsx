import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const SocialLogin = ({ from }) => {
  const { loginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider text-info">or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-primary w-full rounded-xl"
      >
        <FcGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
