import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-300">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Navbar;
