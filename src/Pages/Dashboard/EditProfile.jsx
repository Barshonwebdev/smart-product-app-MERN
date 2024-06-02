import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProfile = () => {
  const userData = useLoaderData();
  const handleEditProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phonenumber = form.phonenumber.value;
    const photo = form.photo_url.value;

    const userInformation = {
      name,
      age,
      email: userData?.email,
      phonenumber,
      photo,
    };
    console.log(userInformation);
    fetch(`http://localhost:3100/user/${userData?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInformation),
    }).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
        Swal.fire('Profile updated') }
        else {
            Swal.fire('Please make a change to edit')
        }
    })
     
  };
  return (
    <div>
      <h1 className="my-3 text-2xl text-gray-500 text-center"> Edit Profile</h1>
      <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleEditProfile}
              className="card-body grid grid-cols-2 gap-x-10"
            >
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  className="input input-bordered"
                  defaultValue={userData?.name}
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
                  value={userData?.email}
                  disabled
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="age"
                  className="input input-bordered"
                  defaultValue={userData?.age}
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="phonenumber"
                  className="input input-bordered"
                  defaultValue={userData?.phonenumber}
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
                  defaultValue={userData?.photo}
                  required
                />
              </div>

              <div className="form-control mt-6 col-span-2">
                <button className="btn text-white bg-blue-700">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
