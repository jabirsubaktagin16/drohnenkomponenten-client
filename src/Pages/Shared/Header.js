import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo.png";
import auth from "./../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/signin");
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      <li className={!user ? "lg:ml-6" : ""}>
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-link no-underline normal-case"
            >
              {user.displayName}
            </label>
            <ul
              tabIndex="0"
              className="menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="btn btn-ghost">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-accent text-base-100" to="/signin">
            Sign In
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={mainLogo} className="w-1/6" alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
