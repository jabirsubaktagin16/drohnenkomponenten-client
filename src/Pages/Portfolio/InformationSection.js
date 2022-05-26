import React from "react";
import portfolioImage from "../../assets/images/portfolioImage.JPG";

const InformationSection = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={portfolioImage}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h2 className="text-3xl font-semibold pt-6 pb-2">
              Information About Me
            </h2>
            <p>
              <span className="font-bold">Full Name:</span> Ahmad Subaktagin
              Jabir
            </p>
            <p>
              <span className="font-bold">E-mail:</span>{" "}
              subaktagin.jabir16@gmail.com
            </p>
            <p>
              <span className="font-bold">Contact No:</span> +8801757-463917
            </p>
            <h3 className="text-2xl font-bold mt-6">Education</h3>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">
                  Masters of Business Administration (MBA)
                </span>
                <br /> Bangladesh University of Professionals (BUP)
                <br />
                2022 - Present
              </li>
              <li>
                <span className="font-semibold">
                  Bachelor of Science (BSc.) in Computer Science and Engineering
                </span>
                <br /> Ahsanullah University of Science and Technology
                <br />
                2016 - 2021
              </li>
              <li>
                <span className="font-semibold">
                  Higher Secondary Certificate (HSC)
                </span>
                <br /> Birshreshtha Noor Mohammad Public College
                <br />
                2014 - 2016
              </li>
              <li>
                <span className="font-semibold">
                  Secondary School Certificate (SSC)
                </span>
                <br /> Birshreshtha Noor Mohammad Public College
                <br />
                2012 - 2014
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
