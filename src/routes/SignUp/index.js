import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  let name, email, password, value;
  const getData = (event) => {
    name = event.target.name;
    email = event.target.email;
    password = event.target.password;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postUserData = async (event) => {
    console.log(user.name, user.email, user.password);

    event.preventDefault();
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // localStorage.setItem("user", JSON.stringify(result));
    // console.log(result);
    // navigate("/sigup");
  };
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/login");
  //   }
  // }, []);

  // console.log(user.name);
  // console.log(user.email);
  // console.log(user.password);
  return (
    <div>
      <div>
        <form className="register" onSubmit={postUserData}>
          <h1>Register</h1>
          <input
            className="inputBox"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={getData}
            value={user.name}
          />
          <input
            className="inputBox"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={getData}
          />
          <input
            className="inputBox"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={user.password}
            onChange={getData}
          />
          <button type="submit" style={{ width: "380px" }} className="inputBox">
            SignUp
          </button>
        </form>
        <h3>
          Already have an account <Link to="/login">Login</Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
