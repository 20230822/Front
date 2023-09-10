// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import "../style/Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <Reset />
        <h2>SIGN IN</h2>
        <div className="input-group">
          <label value="username"></label>
          <input type="text" id="username" placeholder="ID" />
          <br></br>
          <label value="password"></label>
          <input type="password" id="password" placeholder="PW" />
          <br></br>
          <input type="submit" value="Login"/>
        </div>
      </div>
    </div>
  );
}


export default Login;