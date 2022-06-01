import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light justify-content-center">
      <Link className="navbar-brand text-white" to="/">
        Al-Quran
      </Link>
    </nav>
  );
};
