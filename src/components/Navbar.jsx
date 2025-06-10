import React from "react";
import logo from "../assets/lost-and-found.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        Home
      </NavLink>
      <NavLink
        to={"/lostAndFoundItems"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        Lost & Found Items
      </NavLink>
      <NavLink
        to={"/recoveredItems"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        All Recovered Items
      </NavLink>
      <NavLink
        to={"/manageItems"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        Manage My Items
      </NavLink>
    </>
  );
  return (
    <div className="navbar p-0 max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <img src={logo} alt="" className="h-[50px]" />
          <a className="text-xl text-primary font-bold">TrackBack</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <Link
          to={"/register"}
          className="btn btn-primary text-neutral text-base"
        >
          Register
        </Link>
        <Link to={"/login"} className="btn btn-primary text-neutral text-base">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
