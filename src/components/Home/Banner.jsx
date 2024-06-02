import banner from '../../assets/Banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Smart Product</h1>
            <p className="mb-5 text-xl">Choose products and gadgets of your liking, get delivered at your doorstep!</p>
            <button className="btn btn-info">Begin Tour</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;