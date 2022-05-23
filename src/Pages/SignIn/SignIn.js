import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.gif";
import Header from "../Shared/Header";
import auth from "./../../firebase.init";
import useToken from "./../../hooks/useToken";
import Loading from "./../Shared/Loading";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  let signInError;
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from.pathname || "/";

  useEffect(() => {
    if (token) navigate(from, { replace: true });
  }, [token, navigate, from]);

  if (loading || sending) {
    return <Loading />;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const email = watch("email");

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  return (
    <>
      <Header />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:max-w-lg bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  <label className="label">
                    <button
                      onClick={resetPassword}
                      className="uppercase label-text-alt btn-link hover:no-underline"
                    >
                      Forgot password?
                    </button>
                  </label>
                </div>
                {signInError}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  New to Drohnenkomponenten?{" "}
                  <Link className="text-primary" to="/signup">
                    Create New Account
                  </Link>
                </small>
              </p>
              <div className="divider">OR</div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
