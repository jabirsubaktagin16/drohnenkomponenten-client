import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import useTools from "./../../hooks/useTools";
import SingleTool from "./../Home/SingleTool";

const Products = () => {
  const [tools, setTools] = useTools();
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-primary text-center">
        Our Products
      </h1>
      <div className="container mx-auto grid lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-12">
        {tools.map((tool) => (
          <SingleTool tool={tool} key={tool._id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
