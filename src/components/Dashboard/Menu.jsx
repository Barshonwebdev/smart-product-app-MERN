import { Link, Outlet } from "react-router-dom";
import UserInfo from "./UserInfo";

const Menu = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="">
        <div className=" min-h-72 md:min-h-screen min-w-64 rounded text-white bg-blue-600">
          <div className=" text-center">
            <p className="text-lg pt-2">Dashboard Options</p>
            <div className="my-10 flex flex-col space-y-7">
              <Link to={"/dashboardlayout/home"}>
                <button className="hover:text-blue-800 hover:bg-white  px-16 py-2 rounded-lg text-white font-semibold">
                  Dashboard
                </button>
              </Link>
              <Link to={"/dashboardlayout/allproducts"}>
                <button className="hover:text-blue-800 hover:bg-white  px-16 py-2 rounded-lg text-white font-semibold">
                  All Products
                </button>
              </Link>
              <Link to={"/dashboardlayout/addproduct"}>
                <button className="hover:text-blue-800 hover:bg-white  px-16 py-2 rounded-lg text-white font-semibold">
                  Add product
                </button>
              </Link>
              <Link to={"/"}>
                <button className="hover:text-blue-800 hover:bg-white  px-16 py-2 rounded-lg text-white font-semibold">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Outlet></Outlet>
      {/* user info  */}
      <UserInfo></UserInfo>
    </div>
  );
};

export default Menu;
