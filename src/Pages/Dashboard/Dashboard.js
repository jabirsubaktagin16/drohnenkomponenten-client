import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "./../../firebase.init";
import useAdmin from "./../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="navbar-start">
        <label
          htmlFor="tabIndex"
          className="btn btn-ghost drawer-button lg:hidden"
        >
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
      </div>
      <div className="drawer drawer-mobile">
        <input id="tabIndex" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <h2 className="text-2xl text-primary">Welcome to Your Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label for="tabIndex" className="drawer-overlay"></label>
          <div className="bg-secondary text-white">
            <div className="flex justify-center items-center">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                daisyUI
              </Link>
            </div>
            <ul className="menu p-4 overflow-y-auto w-80">
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              {admin ? (
                <>
                  <li>
                    <a>Manage All Orders</a>
                  </li>
                  <li>
                    <a>Add A Product</a>
                  </li>
                  <li>
                    <a>Make Order</a>
                  </li>
                  <li>
                    <a>Manage Products</a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a>My Orders</a>
                  </li>
                  <li>
                    <a>Add A Review</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
