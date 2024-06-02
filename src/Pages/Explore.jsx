import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/Products/SingleProduct";

const Explore = () => {
    const exploreGadgets=useLoaderData();
    return (
        <div className="min-h-screen">
            <h1 className="text-center mt-10 text-4xl text-gray-600 font-semibold">Explore our collection!</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 mb-10 mx-4'>
            {
                exploreGadgets.map(product=><SingleProduct key={exploreGadgets.id} product={product}></SingleProduct>)
            }
        </div>
        </div>
    );
};

export default Explore;