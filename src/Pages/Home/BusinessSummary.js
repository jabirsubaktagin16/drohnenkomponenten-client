import React from "react";
import CountUp from "react-countup";
import { FaMoneyCheckAlt, FaTools, FaUserAlt } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const BusinessSummary = () => {
  return (
    <div className="bg-secondary">
      <div className="grid overflow-hidden lg:grid-cols-4 grid-cols-2 grid-rows-none gap-5 w-auto lg:px-20 lg:mx-auto text-white py-10">
        <div className="text-6xl">
          <div className="flex flex-col justify-center items-center">
            <FaUserAlt />
            <h1 className="text-2xl text-center font-bold mt-4">
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              Customers
            </h1>
          </div>
        </div>
        <div className="text-6xl">
          <div className="flex flex-col justify-center items-center">
            <FaMoneyCheckAlt />
            <h1 className="text-2xl text-center font-bold mt-4">
              <CountUp start={0} end={10} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    L+
                  </div>
                )}
              </CountUp>
              Revenues
            </h1>
          </div>
        </div>
        <div className="text-6xl">
          <div className="flex flex-col justify-center items-center">
            <MdOutlineReviews />
            <h1 className="text-2xl text-center font-bold mt-4">
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    K+
                  </div>
                )}
              </CountUp>
              Reviews
            </h1>
          </div>
        </div>
        <div className="text-6xl">
          <div className="flex flex-col justify-center items-center">
            <FaTools />
            <h1 className="text-2xl text-center font-bold mt-4">
              <CountUp start={0} end={10} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              Tools
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
