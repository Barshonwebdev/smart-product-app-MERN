import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth();
    const [userInformation,setUserInformation]=useState({});
    useEffect(()=>{
      fetch(`http://localhost:3100/user/${user?.email}`)
      .then((res)=>res.json())
      .then(data=>setUserInformation(data))
    },[user?.email])
    return (
        <div className="card   max-h-screen  bg-base-100 shadow-xl my-3 md:my-0 me-3 ">
          <h1 className="text-2xl text-center text-gray-600 md:mt-3">
            User Information
          </h1>
          <figure className="px-10 mt-4 ">
            <img src={userInformation?.photo} className="rounded-xl w-fit" />
          </figure>
          <div className=" items-center text-gray-600 mx-2 text-center">
            <h2 className="my-3 ">Username: {userInformation?.name}</h2>
            <p className="mb-3 md:mb-2 ">
              Email: <span className="font-semibold">{userInformation?.email}</span>
            </p>
            {userInformation.verified ? <p>Verified: Yes</p> : <p>Verified: No</p>}
            <div><button className='btn btn-primary my-3 btn-sm'>Edit Profile</button></div>
          </div>
        </div>
    );
};

export default UserInfo;