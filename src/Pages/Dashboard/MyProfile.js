import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import useUserDetails from "./../../hooks/useUserDetails";
import PageTitle from "./../Shared/PageTitle";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const currentEmail = user?.email;

  const [currentUser] = useUserDetails(currentEmail);

  const navigate = useNavigate();

  const { _id, img, name, linkedIn, location, contactNo } = currentUser;

  const image = img
    ? img
    : user?.photoURL
    ? user?.photoURL
    : "https://i.ibb.co/N7bsG2y/blank-profile-picture-973460-1280.webp";

  const handleUpdateProfile = (id) =>
    navigate(`/dashboard/updateProfile/${id}`);

  return (
    <>
      <PageTitle title="My Profile" />
      <div className="my-20 lg:px-20 px-6">
        <h2 className="text-4xl font-bold my-8 text-primary text-center">
          My Profile
        </h2>
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt="Profile" className="w-80 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {!name && <span>{user?.displayName}</span>}
                {name && <span>{name}</span>}
              </h2>
              <div className="p-6">
                <div>
                  <p className="font-semibold">Email</p>
                  <p>{user?.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>
                    {!location && (
                      <span className="text-red-500">
                        You Have not Added Your Location Yet
                      </span>
                    )}
                    {location && <span>{location}</span>}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Contact No.</p>
                  <p>
                    {!contactNo && (
                      <span className="text-red-500">
                        You Have not Added Your Contact No. Yet
                      </span>
                    )}
                    {contactNo && <span>{contactNo}</span>}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Linked In</p>
                  {!linkedIn && (
                    <span className="text-red-500">
                      You Have not Added Your Linked In URL Yet
                    </span>
                  )}
                  {linkedIn && <span>{linkedIn}</span>}
                </div>
              </div>
              <button
                onClick={() => handleUpdateProfile(_id)}
                className="btn btn-primary"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
