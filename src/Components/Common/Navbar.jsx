import React from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
   const { user,logOut } = useAuth();
  const links = (
    <>
      <NavLink to="/service" className="text-gray-700 mr-5 font-semibold">
        Services
      </NavLink>
      <NavLink to="/send-parcel" className="text-gray-700 mr-5 font-semibold">
        Send  parcel
      </NavLink>
      <NavLink to="/covarage" className="text-gray-700 mr-5 font-semibold">
        Coverage
      </NavLink>
      <NavLink to="/about-us" className="text-gray-700 mr-5 font-semibold">
        About Us
      </NavLink>
      <NavLink to="/pricing" className="text-gray-700 mr-5 font-semibold">
        Pricing
      </NavLink>
      <NavLink to="/be-a-rider" className="text-gray-700 mr-5 font-semibold">
        Be a Rider
      </NavLink>

       {
        user&&<>
        <NavLink to="/dashboard/my-parcel" className="text-gray-700 mr-5 font-semibold">
        My parcel
      </NavLink>
        </>
       }

    </>
  );
 
  
  console.log(user);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(err=>console.log(err))
  }

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?<Link onClick={handleLogOut}  className="btn">Logout</Link>:<Link to='/login' className="btn">Login</Link>}
        <Link to='/rider' className="btn btn-primary text-black ml-2">Be a rider</Link>
      </div>

    </div>
  );
};

export default Navbar;
