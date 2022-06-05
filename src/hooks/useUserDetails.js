import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from './../firebase.init';

const useUserDetails = (email) => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://limitless-woodland-47150.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/signin");
        toast("Please Sign In First");
      }
      return res.json();
    })
      .then((data) => setCurrentUser(data));
  }, [email]);

  return [currentUser, setCurrentUser];
};

export default useUserDetails;
