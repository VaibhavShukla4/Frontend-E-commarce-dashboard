import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("accesToken");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="nav-ul">
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? (
            <Link to="/signup" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/signup">Signup</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
