import React from 'react';
import errorpage from '../../public/error.jpg'
import Navbar from '../components/Shared-Components/Navbar';
const ErrorPage = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='min-h-screen flex justify-center items-center'>
            <img className='md:w-1/2' src={errorpage} alt="" />
        </div>
       </div>
    );
};

export default ErrorPage;