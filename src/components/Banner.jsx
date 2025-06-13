import React from "react";
import { Link } from "react-router";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#f2f2f2] py-20 px-4 md:px-12 my-16 rounded-2xl">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
            Lost Something? <br />
            <span className="text-primary">Let's Bring It Back.</span>
          </h1>
          <p className="text-lg text-[#7a7a7a] mb-8">
            TrackBack helps you report lost items and browse found ones in your
            area. Reconnect people with what matters—quickly, safely, and
            easily.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <Link
              to="/addLostAndFoundItems"
              className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold transition duration-200"
            >
              Report Lost Item
            </Link>
            <Link
              to="/lostAndFoundItems"
              className="btn btn-outline btn-primary hover:text-white px-6 py-3 rounded-lg text-sm font-semibold transition duration-200"
            >
              View Found Items
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="">
          <img
            src={bannerImg}
            alt="Lost and Found Illustration"
            title="Icon Made by JustIcon"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
