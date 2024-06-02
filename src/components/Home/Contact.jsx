import React from "react";

const Contact = () => { 
  return (
    <div className="mt-20">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left lg:ml-24 md:px-24">
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">
              In case you face any kind of problem, reach out to us via our automated support system. Mail us or give us a call!
            </p>
          </div>
          <div className="lg:ml-24 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Issue</span>
                </label>
                <textarea placeholder="Mention your query here"  className="border-base-300 border rounded-lg ps-3 pt-2" name="" id=""></textarea>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
