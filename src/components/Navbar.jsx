import React, { use } from "react";
import logo from "../assets/lost-and-found.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("user signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        Home
      </NavLink>
      <NavLink
        to={"/allItems"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        Lost & Found Items
      </NavLink>
      <NavLink
        to={"/aboutUs"}
        className="btn bg-transparent text-neutral border-0 text-base"
      >
        About Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar p-0 max-w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
        <Link to={"/"}>
          <div className="md:flex hidden justify-center items-center cursor-pointer">
            <img src={logo} alt="" className="h-[50px]" />
            <a className="text-xl text-primary font-bold">TrackBack</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/addLostAndFoundItems">
                    Add Lost & Found Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recoveredItems">All Recovered Items</NavLink>
                </li>
                <li>
                  <NavLink to="/myItems">Manage My Items</NavLink>
                </li>
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-primary text-neutral text-base"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <NavLink
              to={"/register"}
              className="btn btn-primary text-neutral text-base"
            >
              Register
            </NavLink>
            <NavLink
              to={"/login"}
              className="btn btn-primary text-neutral text-base"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
