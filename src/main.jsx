import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Homepage from './Pages/Homepage/Homepage';
import Login from './AuthenticationRoutes/Login';
import Register from './AuthenticationRoutes/Register';
import AuthProvider from './providers/AuthProvider';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Explore from './Pages/Explore';
import Support from './Pages/Support';
import DashboardLayout from './Layouts/DashboardLayout';
import Blogs from './Pages/Blogs';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllProducts from './Pages/Dashboard/AllProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import ErrorPage from './Pages/ErrorPage';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from './Pages/Dashboard/EditProduct';
import EditProfile from './Pages/Dashboard/EditProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>,
        loader:()=>fetch('http://localhost:3100/gadgets')
      },
      {
        path:'/productdetails/:id',
        element: <ProductDetails></ProductDetails> ,
        loader:({params})=>fetch(`http://localhost:3100/gadgets/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/explore',
        element:<Explore></Explore>,
        loader:()=>fetch('http://localhost:3100/gadgets')
      },
      {
        path:'/support',
        element:<Support></Support>
      }
    ]
  },
  {
    path:'/dashboardlayout',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboardlayout/home',
        element:<DashboardHome></DashboardHome>
      },
      {
        path:'/dashboardlayout/allproducts',
        element:<AllProducts></AllProducts>,
        loader:()=>fetch('http://localhost:3100/gadgets')
      },
      {
        path:'/dashboardlayout/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/dashboardlayout/editproduct/:id',
        element:<EditProduct></EditProduct>,
        loader:({params})=>fetch(`http://localhost:3100/gadgets/${params.id}`)
      },
      {
        path:'/dashboardlayout/editProfile/:id',
        element:<EditProfile></EditProfile>,
        loader:({params})=>fetch(`http://localhost:3100/user/get/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
