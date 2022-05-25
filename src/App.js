import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/Admin/ManageOrders";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/NormalUser/AddReview";
import MyOrders from "./Pages/Dashboard/NormalUser/MyOrders";
import Payment from "./Pages/Dashboard/NormalUser/Payment";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import PurchaseItem from "./Pages/Purchase/PurchaseItem";
import NotFound from "./Pages/Shared/NotFound";
import RequireAdmin from "./Pages/SignIn/RequireAdmin";
import RequireAuth from "./Pages/SignIn/RequireAuth";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="blogs" element={<Blogs />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <PurchaseItem />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route
            path="orders"
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path="addReview"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
