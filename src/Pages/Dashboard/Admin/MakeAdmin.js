import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading />;
  return (
    <>
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

      {/* <div className="h-screen flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold my-8 text-primary text-center uppercase">
          Make A User Admin
        </h2>
        <div className="overflow-x-auto">
          <table className="table min-w-full">
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
      </div> */}
    </>
  );
};

export default MakeAdmin;
