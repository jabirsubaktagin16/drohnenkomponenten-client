import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCrown } from "react-icons/ai";

const UserRow = ({ index, user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(
      `https://drohnenkomponenten-server.onrender.com/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully Made an admin");
        }
      });
  };
  return (
    <tr className="border-b">
      <td className="px-6 py-4  text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 ">{email}</td>
      <td className="px-6 py-4 ">
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-secondary gap-2 text-white"
          >
            <AiOutlineCrown />
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
