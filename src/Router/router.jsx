import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Covarage from "../Pages/Covarage";
import AboutUs from "../Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/about-us',
        element: <AboutUs/>,
      },
      {
        path: "/covarage",
        element: <Covarage />,
        loader: () => fetch("/warehouses.json").then(res=>res.json()),
      },
    ],
  },
]);

export default router;
