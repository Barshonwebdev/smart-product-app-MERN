import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const product=useLoaderData();
    const token=localStorage.getItem('token');
    const[name,setName]=useState(product.name);
    const[brand,setBrand]=useState(product.brand);
    const[price,setPrice]=useState(product.price);
    const[description,setDescription]=useState(product.description);
    const[availability,setAvailability]=useState(product.availability);
    const[photo_url,setPhoto_url]=useState(product.photo_url);
    const[details,setDetails]=useState(product.details);

    console.log(product);
    const handleEditProduct=(e)=>{
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
            confirmButtonText: "Yes, Edit Product!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3100/gadgets/${product._id}`,{
                    method:"PATCH",
                    headers:{
                        'Content-type':'application/json',
                        authorization:`Bearer ${token}`
                    },
                    body:JSON.stringify(productData),
                })
                .then((res)=>res.json())
                .then(data=>{
                    console.log(data);
                    Swal.fire("Product Edited!!");
                    form.reset();
                })
            }
          });  
    }
    return (
        <div>
          <h1 className="my-3 text-2xl text-gray-500 text-center"> Edit product</h1>
          <div className="hero  ">
            <div className="hero-content  flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleEditProduct} className="card-body grid grid-cols-2 gap-x-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
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
                      value={brand}
                      onChange={(e)=>setBrand(e.target.value)}
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
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
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
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
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
                      value={availability}
                      onChange={(e)=>setAvailability(e.target.value)}
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
                      value={photo_url}
                      onChange={(e)=>setPhoto_url(e.target.value)}
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
                      value={details}
                      onChange={(e)=>setDetails(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-control mt-6 col-span-2">
                    <button className="btn text-white bg-green-700">Edit Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default EditProduct;