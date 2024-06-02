import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleProduct = ({ product, isDashboard, onDelete }) => {
  const { _id, photo_url, name, price, availability, brand, description } =
    product;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3100/gadgets/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted.",
              icon: "success",
            });
            onDelete(_id);
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={photo_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" items-center p-5">
          <h2 className="card-title">{name}</h2>
          <h2 className="">Brand: {brand}</h2>
          <p>Price: ${price}</p>
          <p>Available: {availability}</p>
          <p className="my-2">{description}</p>
          <div className="card-actions flex justify-between mt-5">
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            {isDashboard && (
              <div className="space-x-5">
                <Link to={`/dashboardlayout/editproduct/${_id}`}>
                  <button className="btn bg-amber-600 hover:bg-amber-800 text-white">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn bg-red-600 hover:bg-red-800 text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
