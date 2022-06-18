import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
      <Link style={{ marginRight: "50px" }} to='/'>
        Todo
      </Link>
      <Link to='/home'>Home</Link>
    </nav>
  );
};

export default Navbar;
