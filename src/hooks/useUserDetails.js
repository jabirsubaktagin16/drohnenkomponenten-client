import { useEffect, useState } from "react";

const useUserDetails = (email) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`https://limitless-woodland-47150.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [email]);

  return [currentUser, setCurrentUser];
};

export default useUserDetails;
