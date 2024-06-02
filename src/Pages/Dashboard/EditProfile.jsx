
const EditProfile = () => {
    return (
        <div>
      <h1 className="my-3 text-2xl text-gray-500 text-center"> Edit Profile</h1>
      <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  className="card-body grid grid-cols-2 gap-x-10">
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
             
              
             
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo_url"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              
              
              <div className="form-control mt-6 col-span-2">
                <button className="btn text-white bg-blue-700">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default EditProfile;