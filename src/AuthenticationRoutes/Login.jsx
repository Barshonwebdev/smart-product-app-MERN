import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { googleLogin, user, githubLogin, signIn } = useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname || '/';
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    signIn(email, pass).then(() => {
      e.target.reset();
      if(user){
        navigate(from);
      }
    });
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then(data=>{
      console.log(data);
      if(data?.user?.email){
        const userInfo={
          email:data?.user?.email,
          name:data?.user?.displayName,
          verified:data?.user?.emailVerified,
              photo:data?.user?.photoURL
        }
        fetch(`http://localhost:3100/user`,{
          method:"POST",
          headers: {
            "Content-type":"application/json"
          },
          body:JSON.stringify(userInfo)
        })
        .then((res)=>res.json())
        .then(data=>console.log(data))
      }
      navigate(from);
    })
    
  };
  const handleGithubLogin = () => {
    githubLogin()
    .then(data=>{
      console.log(data);
      if(data?.user?.email){
        const userInfo={
          email:data?.user?.email,
          name:data?.user?.displayName,
          verified:data?.user?.emailVerified,
              photo:data?.user?.photoURL
        }
        fetch(`http://localhost:3100/user`,{
          method:"POST",
          headers: {
            "Content-type":"application/json"
          },
          body:JSON.stringify(userInfo)
        })
        .then((res)=>res.json())
        .then(data=>console.log(data))
      }
      navigate(from);
    })
    
  };
  return (
    <div>


      <div>
        <div className="hero lg:mt-8 ">
          <div className="hero-content flex-col lg:space-x-28 lg:flex-row-reverse">
            <div className="text-center lg:text-left px-5 lg:ml-10">
              <h1 className="text-5xl font-bold">Login at Smart Product!!</h1>
             
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  
                  <div>                    
                  </div>
                </div>
                <div className="form-control mt-6 gap-2">
                  <button className="btn hover:bg-red-800 text-white bg-red-600">
                    Login
                  </button>
                  <p className="text-center">Or,</p>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black hover:bg-base-300"
                  >
                    <FcGoogle className="text-xl"></FcGoogle> Continue with
                    Google
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="btn bg-gray-500 text-white hover:bg-gray-700"
                  >
                    <FaGithub className="text-xl"></FaGithub> Continue with
                    Github
                  </button>
                  <small className="text-center">
                    By continuing, you agree to Smart Product&apos;s Terms of
                    Service; and acknowledge you&apos;ve read our Privacy
                    Policy.
                  </small>
                  <hr className="w-36 mx-auto" />
                  <Link to="/register" className="mx-auto">
                    <p className=" text-sm font-semibold">
                      Not yet on Smart Product? Sign up!
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
