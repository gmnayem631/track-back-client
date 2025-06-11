// AboutUs.jsx
import { FaHandsHelping, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-neutral min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">About Us</h1>
        <p className="text-info text-lg mb-10">
          Reuniting people with their lost items — one post at a time.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="bg-surface shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <FaUsers className="text-secondary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-info">
              To build a community-driven platform where people can safely and
              easily report, search, and recover lost items.
            </p>
          </div>

          <div className="bg-surface shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <FaMapMarkedAlt className="text-secondary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <p className="text-info">
              Users can post lost or found items with detailed info and
              locations. Our system connects potential matches and alerts users
              instantly.
            </p>
          </div>

          <div className="bg-surface shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
            <FaHandsHelping className="text-secondary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-info">
              We believe in trust, transparency, and collaboration. Everyone
              plays a part in helping someone in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
