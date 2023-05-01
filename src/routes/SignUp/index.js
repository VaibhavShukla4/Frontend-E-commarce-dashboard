import React, { useEffect, useState } from "react";
import "./index.css";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, email, password, value;
  const getData = (event) => {
    name = event.target.name;
    email = event.target.email;
    password = event.target.password;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  // console.log(user.name);
  // console.log(user.email);
  console.log(user.password);
  return (
    <div>
      <div>
        <form className="register">
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
          <button style={{ width: "380px" }} className="inputBox" type="button">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
