// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import "../style/Login.css";
function Login() {
  return (
    <div className="login-container">
      <Reset />
      <h2>SIGN IN</h2>
      <div className="input-group">
        <label value="username">ID:</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div className="input-group">
        <label value="password">PW:</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <input type="submit" value="Login"/>
    </div>
  );
}

export default Login;