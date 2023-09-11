import React, { useState } from "react";
import { Reset } from "styled-reset";
import { Link } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const [username, setUsername] = useState(""); // 초기값은 빈 문자열
  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // 입력된 값으로 상태(State) 업데이트
  };
  const [password, setPassword] = useState(""); // 초기값은 빈 문자열
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 입력된 값으로 상태(State) 업데이트
  };

  return (
    <div className="login">
      <div className="box"></div>
      <div className="login-container">
        <Reset />
        <h2>SIGN IN</h2>
        <div className="input-group">
          {/* 3. 입력 값 업데이트 */}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="ID" 
          value={username} // 상태(State)에 저장된 값 사용
          onChange={handleUsernameChange} // 입력 값 변경 이벤트 핸들러 연결
          />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="PW" 
          value={password}
          onChange={handlePasswordChange}/>
          <br />
          <input type="submit" value="Login" />
          <br />
          <Link className="Sign" to={"/Signup"}>
            Sign up
          </Link>
        </div>
      </div>
      <div>
        <p>Username: {username}</p>
      </div>
      <div>
        <p>password: {password}</p>
      </div>
    </div>
  );
}

export default Login;
