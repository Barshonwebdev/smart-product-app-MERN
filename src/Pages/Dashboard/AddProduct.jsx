import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const brand=form.brand.value;
        const price=form.price.value;
        const description=form.description.value;
        const availability=form.availability.value;
        const photo_url=form.photo_url.value;
        const details=form.details.value;

        const productData={name,brand,price,description,availability,photo_url,details}
        console.log(productData);

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add product!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:3100/gadgets',{
                    method:"POST",
                    headers:{
                        'Content-type':'application/json',
                    },
                    body:JSON.stringify(productData),
                })
                .then((res)=>res.json())
                .then(data=>{
                    console.log(data);
                    Swal.fire("New Product Added!!");
                    form.reset();
                })
            }
          });

         
    }
  return (
    <div>
      <h1 className="my-3 text-2xl text-gray-500 text-center"> Add a product</h1>
      <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body grid grid-cols-2 gap-x-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="brand"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Availability</span>
                </label>
                <input
                  type="text"
                  name="availability"
                  placeholder="yes/no"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="details"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control mt-6 col-span-2">
                <button className="btn text-white bg-blue-700">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
