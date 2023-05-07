import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  console.log(JSON.parse(auth));
  return (
    <nav className="nav-ul">
      {auth ? (
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
            <Link to="/signup" onClick={handleLogout}>
              Logout
            </Link>
          </li>
          <li style={{ color: "white" }}>
            {JSON.parse(auth).name.charAt(0).toUpperCase() +
              JSON.parse(auth).name.slice(1)}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
