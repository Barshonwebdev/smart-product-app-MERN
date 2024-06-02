import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/Products/SingleProduct";

const AllProducts = () => {
  const products = useLoaderData();
  const [allproducts,setAllproducts]=useState(products);

  const handleDeleteInstant=(id)=>{
    setAllproducts(allproducts.filter((product)=>product._id!==id));
  }

  return (
    <div>
      <div>
        <h1 className="text-center my-5 text-2xl text-gray-500"> All products</h1>
      </div>
      <div className="flex flex-wrap gap-10 ml-5">
        {
            allproducts.map(product=><SingleProduct onDelete={handleDeleteInstant} isDashboard={true} product={product} key={product.id}></SingleProduct>)
        }
      </div>
    </div>
  );
};

export default AllProducts;
