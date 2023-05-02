import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postUserData = async (e) => {
    console.log(email, password);
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    localStorage.setItem("accesToken", JSON.stringify(result));
    console.log(result.name);
    // if (result.email !== result.email) {

    // }

    navigate("/");
  };
  console.log(email);
  useEffect(() => {
    const auth = localStorage.getItem("accesToken");
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <form className="register" onSubmit={postUserData}>
        <h1>Login</h1>
        <input
          className="inputBox"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" style={{ width: "380px" }} className="inputBox">
          Login
        </button>
      </form>
      <h3>
        Don't have an account <Link to="/signup">SignUp</Link>
      </h3>
    </div>
  );
};

export default Login;