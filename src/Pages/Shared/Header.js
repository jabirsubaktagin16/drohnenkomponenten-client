import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo.png";
import auth from "./../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  /* const [currentUser] = useUserDetails(user?.email);

  const { img } = currentUser;

  const image = img
    ? img
    : user?.photoURL
    ? user?.photoURL
    : "https://i.ibb.co/N7bsG2y/blank-profile-picture-973460-1280.webp"; */

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/signin");
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="py-2 pl-3 pr-4 uppercase text-black md:p-0 flex items-center gap-2 hover:bg-primary md:hover:bg-transparent md:hover:text-primary tracking-wide"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="py-2 md:ml-5 pr-4 uppercase text-black rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 flex items-center gap-2 tracking-wide"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className="py-2 md:ml-5 pr-4 uppercase text-black rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 flex items-center gap-2 tracking-wide"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="py-2 md:ml-5 pr-4 uppercase text-black rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 flex items-center gap-2 tracking-wide"
        >
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-10 shadow bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={mainLogo} className="h-12" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold menu menu-horizontal px-1 bg-white">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/N7bsG2y/blank-profile-picture-973460-1280.webp"
                  alt="User Pic"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li className="font-bold">
                <span>{user?.displayName}</span>
              </li>
              <div className="divider"></div>
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/signin"
            type="button"
            className="text-black bg-primary ease-in-out duration-200 hover:bg-base-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
