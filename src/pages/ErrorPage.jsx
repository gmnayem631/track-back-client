import React from "react";
import errorLottie from "../assets/animations/error-lottie";
import Lottie from "lottie-react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      <Lottie
        animationData={errorLottie}
        loop={true}
        className="min-h-96 max-w-96"
      />
      <button
        onClick={goHome}
        className="btn btn-neutral px-8 py-3 text-lg"
        type="button"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
