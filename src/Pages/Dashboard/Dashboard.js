import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiOutlineCrown,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
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
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="tabIndex" className="drawer-overlay"></label>
          <div className="bg-secondary text-white">
            <ul className="menu p-4 overflow-y-auto w-80">
              <li>
                <Link to="/" className="gap-6">
                  <AiOutlineHome />
                  Drohnenkomponenten Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="gap-6">
                  <AiOutlineUser />
                  My Profile
                </Link>
              </li>
              {admin ? (
                <>
                  <li>
                    <Link to="/dashboard/manageOrders" className="gap-6">
                      <AiOutlineShoppingCart />
                      Manage All Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addProduct" className="gap-6">
                      <AiOutlinePlus />
                      Add A Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/makeAdmin" className="gap-6">
                      <AiOutlineCrown />
                      Make Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageProducts" className="gap-6">
                      <AiOutlineInbox />
                      Manage Products
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard/orders" className="gap-6">
                      <AiOutlineShoppingCart />
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addReview" className="gap-6">
                      <AiOutlineEdit />
                      Add A Review
                    </Link>
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
