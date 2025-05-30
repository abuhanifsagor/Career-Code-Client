import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-base-200">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;
