import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import DeleteConfirmModal from "./../../Shared/DeleteConfirmModal";
import SingleProductManage from "./SingleProductManage";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/manageTools", {
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
      <div className="grid mx-auto lg:px-20 my-16 gap-8">
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
