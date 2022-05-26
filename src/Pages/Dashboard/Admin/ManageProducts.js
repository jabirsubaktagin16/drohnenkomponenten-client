import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import PageTitle from "../../Shared/PageTitle";
import DeleteConfirmModal from "./../../Shared/DeleteConfirmModal";
import SingleProductManage from "./SingleProductManage";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://limitless-woodland-47150.herokuapp.com/manageTools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
