// import React from "react";
import { Outlet } from "react-router";
import NavBar from "./ui/NavBar";

export default function Layout({user, logoutHandler, navigateAbout}) {
  return (
    <div>
      <NavBar user={user} logoutHandler={logoutHandler} navigateAbout={navigateAbout}/>
      <Outlet />
      <footer>© 2025</footer>
    </div>
  );
}
