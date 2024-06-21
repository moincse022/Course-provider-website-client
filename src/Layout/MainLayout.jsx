import React from "react";

import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden">
      <NavBar/>
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
