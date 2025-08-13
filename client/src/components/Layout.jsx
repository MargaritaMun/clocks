import React from "react";
import { Outlet } from "react-router";
import NavBar from "./ui/NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <footer>© 2025</footer>
    </div>
  );
}
