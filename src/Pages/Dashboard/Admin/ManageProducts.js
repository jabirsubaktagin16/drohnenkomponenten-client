import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import PageTitle from "../../Shared/PageTitle";
import DeleteConfirmModal from "./../../Shared/DeleteConfirmModal";
import SingleProductManage from "./SingleProductManage";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  const navigate = useNavigate();
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://drohnenkomponenten-server.onrender.com/manageTools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/signin");
        toast("Please Sign In First");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle title="Manage Products" />
      <h2 className="text-4xl font-bold my-8 text-primary text-center">
        Manage Products
      </h2>
      <div className="grid mx-auto mb-8 lg:px-20 gap-8">
        {tools?.map((tool) => (
          <SingleProductManage
            tool={tool}
            key={tool._id}
            refetch={refetch}
            setDeletingTool={setDeletingTool}
          />
        ))}
      </div>
      {deletingTool && (
        <DeleteConfirmModal
          deletingTool={deletingTool}
          refetch={refetch}
          setDeletingTool={setDeletingTool}
        />
      )}
    </>
  );
};

export default ManageProducts;
