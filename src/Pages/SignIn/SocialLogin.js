import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "./../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  const location = useLocation();

  const [token] = useToken(googleUser || githubUser);

  let from = location.state?.from?.pathname || "/";

  if (googleError || githubError)
    toast.error(googleError?.message || githubError?.message);

  // if (googleLoading || githubLoading) return <Loading />;

  if (token) navigate(from, { replace: true });

  return (
    <div className="flex justify-center gap-2 mt-4 flex-col lg:flex-row">
      <button
        onClick={() => signInWithGoogle()}
        className="btn gap-2 bg-red-600 border-0 hover:bg-red-500 text-white"
      >
        <FaGoogle />
        Sign In with Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn gap-2 bg-black border-0 hover:bg-gray-900 text-white"
      >
        <FaGithub />
        Sign In with Github
      </button>
    </div>
  );
};

export default SocialLogin;
