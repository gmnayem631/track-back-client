import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Login to Your Account
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-neutral mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-neutral mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button className="btn btn-primary w-full mt-2 text-neutral">
            Login
          </button>

          <div className="divider text-info">or</div>

          <button className="btn btn-outline btn-error w-full">
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
