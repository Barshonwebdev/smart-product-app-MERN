import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productInfo = useLoaderData();
  const {
    photo_url,
    name,
    price,
    availability,
    brand,
    description,
    details,
  } = productInfo;
  console.log(productInfo);
  return (
    <div className="my-5 flex flex-col justify-center items-center">
      <h2 className=" text-3xl text-center font-semibold mb-3">{name}</h2>

      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={photo_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" items-center p-5">
          <h2 className="">Brand: {brand}</h2>
          <p>Price: ${price}</p>
          <p>Available: {availability}</p>
          <p className="my-2">{description}</p>
          <p className="italic">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
