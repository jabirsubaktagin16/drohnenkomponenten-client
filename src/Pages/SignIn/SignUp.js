import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/images/signUp.gif";
import auth from "../../firebase.init";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";
import useToken from "./../../hooks/useToken";
import PageTitle from "./../Shared/PageTitle";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user);

  let signUpError;
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    signUpError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("Update Done");
  };

  if (token) navigate("/");

  return (
    <>
      <PageTitle title="Sign Up" />
      <Header />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row shadow-2xl ">
          <div className="text-center lg:text-left">
            <img src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:max-w-lg bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Input Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Email Input Field */}
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
                {/* Password Input Field */}
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
                </div>
                {signUpError}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary text-white"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  Already have an account?{" "}
                  <Link className="text-primary" to="/signin">
                    Sign In
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

export default SignUp;
