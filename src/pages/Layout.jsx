import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const whiteList = ["/protected"];

function Layout() {
  const location = useLocation();
  const { account } = JSON.parse(localStorage.getItem("faceAuth")) || {};

  if (!account && whiteList.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  if (account && !whiteList.includes(location.pathname)) {
    return <Navigate to="/protected" />;
  }

  return (
    <div className="layout-container">
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;