import React from "react";
import CardSkeleton from "../Shared/CardSkeleton";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import useTools from "./../../hooks/useTools";
import SingleTool from "./../Home/SingleTool";
import PageTitle from "./../Shared/PageTitle";

const Products = () => {
  const [tools, isLoading] = useTools();
  return (
    <>
      <PageTitle title="Products" />
      <Header />
      <h1 className="text-4xl font-bold text-primary text-center">
        Our Products
      </h1>
      <div className="container mx-auto grid lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-12">
        {isLoading && <CardSkeleton cards={6} />}
        {tools.map((tool) => (
          <SingleTool tool={tool} key={tool._id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
