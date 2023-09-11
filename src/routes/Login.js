import React, { useState } from "react";
import { Reset } from "styled-reset";
import { Link } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userID, password, userName } = formData;
  };

  return (
    <div className="login">
      <div className="box"></div>
      <div className="login-container">
        <Reset />
        <h2>SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="userID">UserID</label>
            <input
              type="text"
              id="userID"
              name="userID"
              placeholder="ID"
              value={formData.userID}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PW"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            <input type="submit" value="Login" />
            <br />
            <Link className="Sign" to={"/Signup"}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
      {/*<div>
        <p>Username: {formData.userID}</p>
      </div>
      <div>
        <p>password: {formData.password}</p>
  </div>*/}
    </div>
  );
}

export default Login;
