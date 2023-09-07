// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";

function Login() {
  return (
    <div className="login">
      <Reset />

      <h1>login</h1>
    </div>
  );
}

export default Login;