import React from "react";
import useTools from "./../../hooks/useTools";
import SingleTool from "./SingleTool";

const Tools = () => {
  const [tools, setTools] = useTools();

  return (
    <>
      <h1 className="text-4xl font-bold text-primary text-center">
        Our Top Products
      </h1>
      <div className="container mx-auto grid lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-12">
        {tools.slice(0, 6).map((tool) => (
          <SingleTool tool={tool} key={tool._id} />
        ))}
      </div>
    </>
  );
};

export default Tools;
