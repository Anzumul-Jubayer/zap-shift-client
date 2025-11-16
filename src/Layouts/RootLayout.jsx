import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
