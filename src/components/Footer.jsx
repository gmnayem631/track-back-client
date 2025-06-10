import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/lost-and-found.png";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent text-neutral">
      <footer className="p-10 justify-evenly">
        <div className="max-w-11/12 mx-auto grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center justify-center">
              <img src={logo} alt="" className="h-[50px]" />
              <h2 className="text-xl font-bold text-neutral">TrackBack</h2>
            </div>
            <p className="text-sm text-neutral/80">
              Every lost item has a story — and a chance to be found.
            </p>
            <p className="text-sm text-neutral/60 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-xl font-bold text-neutral">Follow Us</h2>
            <div className="flex gap-5 text-neutral">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h2 className="text-xl font-bold text-neutral">Quick Links</h2>
            <NavLink to="/about" className="text-neutral  transition">
              About Us
            </NavLink>
            <NavLink to="/contact" className="text-neutral transition">
              Contact
            </NavLink>
            <NavLink to="/terms" className="text-neutral  transition">
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
