import { signOut } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import PageTitle from "../../Shared/PageTitle";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://limitless-woodland-47150.herokuapp.com/user", {
      method: "GET",
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

  if (isLoading) return <Loading />;
  return (
    <>
      <PageTitle title="Make Admin" />
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    {users.map((user, index) => (
                      <UserRow
                        index={index}
                        key={user._id}
                        user={user}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
