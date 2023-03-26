import React from "react";
import contact from "../../assets/images/contact.png";
import Footer from "./Footer";
import Header from "./Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={contact} className="lg:max-w-xl rounded-lg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Get in Touch</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">E-Mail</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="input input-bordered h-52 resize-none"
                  placeholder="Enter Your Message Here"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
