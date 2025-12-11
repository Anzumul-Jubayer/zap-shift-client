import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Covarage from "../Pages/Covarage";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Rider from "../Pages/Rider";
import Privateroute from "./Privateroute";
import SendParcel from "../Pages/SendParcel";

import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyParcel from "../Pages/Dashboard/MyParcel";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Dashboard/Payment/PaymentCancel";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../Pages/Dashboard/AssignRiders/AssignRiders";
import AssignDeliveries from "../Pages/Dashboard/AssignedDeliveries/AssignDeliveries";
import RiderRoute from "./RiderRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/rider",
        element: (
          <Privateroute>
            <Rider />
          </Privateroute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: (
          <Privateroute>
            <SendParcel />
          </Privateroute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/covarage",
        element: <Covarage />,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <DashBoardLayout />
      </Privateroute>
    ),
    children: [
      {
        path: "my-parcel",
        Component: MyParcel,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancel",
        Component: PaymentCancel,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      // rider only route
      {
        path: "assigned-deliveries",
        element: (
          <RiderRoute>
            <AssignDeliveries />
          </RiderRoute>
        ),
      },
      // admin only route
      {
        path: "approve-riders",

        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "users-management",

        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },
      {
        path: "assign-riders",

        element: (
          <AdminRoute>
            <AssignRiders />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
