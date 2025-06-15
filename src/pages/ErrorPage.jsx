import React from "react";
import errorLottie from "../assets/animations/error-lottie";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie
        animationData={errorLottie}
        loop={true}
        className="min-h-96 max-w-96"
      ></Lottie>
    </div>
  );
};

export default ErrorPage;
