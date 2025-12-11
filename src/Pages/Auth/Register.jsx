import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, signInGoogle, setUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure=useAxiosSecure()


  const handleRegistration = (data) => {
  const profileImg = data.photo[0];

    // 1️⃣ Register user
    registerUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        navigate(location?.state || "/");
        // 2️⃣ Upload profile image to imgbb
        const formData = new FormData();
        formData.append("image", profileImg);

        const imageAPIURL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Imagehost
        }`;

        axios
          .post(imageAPIURL, formData)
          .then((res) => {
            const photoURL = res.data.data.display_url;

            // create user in the database

            const userInfo={
                 email:data.email,
                 displayName:data.name,
                 photoURL:photoURL
            }
           
            axiosSecure.post('/users',userInfo).then(res=>{
              if(res.data.insertedId){
                console.log('user Created')
              }
            })

            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };
            console.log(userProfile);
            updateUserProfile(userProfile)
              .then()
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log("Image upload error:", err));
      })
      .catch((err) => console.log("Register error:", err));
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
       
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
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required.</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="label font-semibold">Image</label>
            <input
              type="file"
              className="file-input w-full"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">Image is required.</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 8 characters including uppercase,
                lowercase, number & special character.
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="mt-1 text-right">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full mt-4 text-black">
            Register
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold link link-hover"
            >
              Login
            </Link>
          </p>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="btn w-full bg-white border border-gray-300 text-black flex items-center justify-center gap-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
