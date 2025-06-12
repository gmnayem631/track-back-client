import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";

const SocialLogin = () => {
  const { loginWithGoogle } = use(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
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
