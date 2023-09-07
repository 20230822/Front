// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <Reset />

      <h1>header</h1>
    </div>
  );
}

export default Header;