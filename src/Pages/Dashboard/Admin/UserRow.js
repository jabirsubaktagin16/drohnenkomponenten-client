import React from "react";
import { toast } from "react-hot-toast";
import { AiFillCrown, AiFillDelete } from "react-icons/ai";

const UserRow = ({ index, user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
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
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-secondary gap-2 text-white"
          >
            <AiFillCrown />
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error gap-2">
          <AiFillDelete />
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
