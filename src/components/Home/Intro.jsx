import React from "react";
import intro from '../../../public/computer-curvy-monitor-digital-device.jpg'
const Intro = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row">
         
          <div className="lg:mr-32">
            <h1 className="text-5xl font-bold text-center mt-5">Smart Products</h1>
            <p className="py-6 text-center">
              Welcome to Smart Products, your ultimate destination for the latest
              and greatest in tech innovations. Whether you're a tech
              enthusiast, a gadget guru, or simply someone looking to stay
              updated on the cutting-edge devices shaping our world, our website
              offers comprehensive reviews, in-depth analyses, and the latest
              news on everything from smartphones and smart home devices to
              wearable tech and gaming gear. At Smart Products, we strive to
              provide you with the most accurate and up-to-date information,
              helping you make informed decisions and stay ahead of the
              technology curve. Dive into our expertly curated content and
              discover the future of technology today.
            </p>
            <div className="flex justify-center">
            <button className="btn btn-primary">Explore Our Products</button>
            </div>
          </div>
          <img
            src={intro}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
