import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import image1 from "../images/banner1.jpeg";
import "../style/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const location = useLocation();

  useEffect(() => {
    // Sign Up 페이지에서 전달받은 데이터를 확인
    if (location.state && location.state.signUpData) {
      const { userID, password } = location.state.signUpData;
      setFormData({
        userID,
        password,
      });
    }
  }, [location.state]);

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
    <div className="login" >
      <img className="image" src={image1}/>
      <div className="box"></div>
      <div className="login-container">
        <div className = "blur"></div>
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
