import SingleProduct from '../Products/SingleProduct';

const Featured = ({gadgets}) => {
    console.log(gadgets);
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-gray-500 mb-10'>Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-10 mx-4'>
            {
                gadgets.slice(0,6).map(product=><SingleProduct key={gadgets.id} product={product}></SingleProduct>)
            }
        </div>
        </div>
    );
};

export default Featured;