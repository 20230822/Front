// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import "../style/Home.css";

function Home() {
  return (
    <div className="home">
      <Reset />

      <h1>home</h1>
    </div>
  );
}

export default Home;