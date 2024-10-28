
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const Layout = () => (
  <>
   <div className="grid justify-center"> 
    <NavBar />
      <Outlet />
    </div>
  </>
);

export default Layout;
