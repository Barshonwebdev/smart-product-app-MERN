import React from "react";

const FAQ = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl text-center mx-4">Frequently Asked Questions</h1>
      <div className="flex justify-center mt-10">
        <div className="join join-vertical md:w-1/2  ">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What types of gadgets do you offer?
            </div>
            <div className="collapse-content"> 
              <p>
                We offer smartphones, laptops, tablets, wearables, smart home
                devices, gaming gadgets, and audio-visual equipment.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>
                Log in, go to My Orders, select your order, and view tracking
                information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <p> What is your return policy? </p>
            </div>
            <div className="collapse-content">
              <p>You can return products within 30 days of delivery for a full refund or exchange.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
