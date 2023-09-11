import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
function SignUp() {
  // 상태(State)를 객체로 관리.
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
    userName: "",
  });

  // 입력 값 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { userID, password, userName } = formData;
  };

  return (
    <div className="signup">
      <div className="box"></div>
      <div className="login-container">
        <h2>SIGN UP</h2>
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
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Name"
              value={formData.userName}
              onChange={handleInputChange}
            />
            <br />
            <input type="submit" value="Sign UP" />
          </div>
        </form>
      </div>
      {/*<div>
        <p>UserID: {formData.userID}</p>
      </div>
      <div>
        <p>password: {formData.password}</p>
      </div>
      <div>
        <p>Username: {formData.userName}</p>
  </div>*/}
    </div>
  );
}

export default SignUp;
