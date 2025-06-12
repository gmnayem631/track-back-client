import Lottie from "lottie-react";
import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import loginLottie from "../assets/animations/login-lottie.json";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log("result", result);
        console.log("user", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-evenly flex-col md:flex-row px-4">
      <div className="">
        <Lottie
          animationData={loginLottie}
          loop={true}
          className="max-h-96 max-w-96"
        ></Lottie>
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-neutral mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-xl"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-neutral mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-xl"
              name="password"
            />
          </div>

          <button className="btn btn-primary w-full mt-2 text-neutral rounded-xl">
            Login
          </button>

          <div className="divider text-info">or</div>

          <button className="btn btn-outline btn-primary w-full rounded-xl">
            <FcGoogle />
            Continue with Google
          </button>
        </form>

        <p className="text-sm text-info mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="link link-hover text-primary font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
