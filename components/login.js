import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="overlay">
        <div className="login-box">

          <h1 className="logo">NETFLIXX</h1>

          <h2>Sign In</h2>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={user.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;