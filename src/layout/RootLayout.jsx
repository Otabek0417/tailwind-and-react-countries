import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
