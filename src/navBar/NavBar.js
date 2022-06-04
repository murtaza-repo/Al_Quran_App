import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar navbar-light justify-content-center">
      {
        path !== '/' ?
          <Link to={"/"} className="text-decoration-none text-white backBtn">Back</Link>
          : null
      }
      <Link className="navbar-brand text-white" to="/">
        Al-Quran
      </Link>
    </nav>
  );
};
