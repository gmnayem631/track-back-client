import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Create an Account
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-neutral mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

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
            <label className="block text-neutral mb-1">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-neutral mb-1">Password</label>
            <input
              type="password"
              placeholder="Password (Min 6 chars, 1 uppercase & lowercase)"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button className="btn btn-primary w-full mt-2">Register</button>
        </form>

        <p className="text-sm text-info mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="link link-hover text-primary font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
