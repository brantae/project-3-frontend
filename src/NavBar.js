import React from "react";
import { Link } from "react-router-dom"


function NavBar() {


  return (
    <nav className="nav">
        <Link to="/"> home </Link>
        <Link to="/festivals"> festivals </Link>
    </nav>
  );
}

export default NavBar;
