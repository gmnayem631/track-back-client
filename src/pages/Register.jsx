import React, { use } from "react";
import { Link } from "react-router";
import regLottie from "../assets/animations/register-lottie.json";
import Lottie from "lottie-react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Now update the profile
        return updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-evenly flex-col-reverse md:flex-row px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-neutral mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full rounded-xl"
              name="name"
            />
          </div>

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
            <label className="block text-neutral mb-1">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full rounded-xl"
              name="photoUrl"
            />
          </div>

          <div className="mb-4">
            <label className="block text-neutral mb-1">Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters, 1 uppercase & 1 lowercase"
              className="input input-bordered w-full rounded-xl"
              name="password"
            />
          </div>

          <button className="btn btn-primary w-full mt-2 text-neutral font-bold text-base">
            Register
          </button>
        </form>

        <p className="text-sm text-info mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="link link-hover text-primary font-medium rounded-xl"
          >
            Login here
          </Link>
        </p>
      </div>

      <div className="">
        <Lottie animationData={regLottie} loop={true} className=""></Lottie>
      </div>
    </div>
  );
};

export default Register;
