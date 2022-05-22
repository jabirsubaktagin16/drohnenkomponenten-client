import React from "react";
import useTools from "./../../hooks/useTools";
import SingleTool from "./SingleTool";

const Tools = () => {
  const [tools, setTools] = useTools();

  return (
    <div className="container mx-auto grid lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-12">
      {tools
        .reverse()
        .slice(0, 6)
        .map((tool) => (
          <SingleTool tool={tool} />
        ))}
    </div>
  );
};

export default Tools;
