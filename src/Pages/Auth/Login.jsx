import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser,signInGoogle,setUser } = useAuth();
  const location=useLocation()
  const navigate=useNavigate()
  const axiosSecure=useAxiosSecure()
  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((res) => {
        setUser(res.user)
        navigate(location?.state||'/')
        
      })
      .catch((err) => console.log(err));
  };
 const handleGoogle=()=>{
    signInGoogle()
    .then(res=>{
      setUser(res.user)
       navigate(location?.state||'/')
       const userInfo={
                 email:res.user.email,
                 displayName:res.user.displayName,
                 photoURL:res.user.photoURL
            }
             axiosSecure.post('/users',userInfo).then(res=>{
              console.log(res.data)
               navigate(location?.state || "/");
            })
    })
    .catch(err=>console.log(err))
 }
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-4">Welcome Back</h2>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <p className="text-center font-semibold my-4">Please Login</p>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.emails?.type === "required" && (
              <p className="text-red-500">Email is Required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password Must be 8 character or long
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4 text-black">Login</button>
          </fieldset>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm ">
          New to zapShift?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold link link-hover"
          >
            Register
          </Link>
        </p>
        <div className="flex justify-center">
          <div className="divider w-1/2">OR</div>
        </div>
        {/* Google */}
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] mb-4 mx-4">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
