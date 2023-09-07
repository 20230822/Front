// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";

function Light() {
  return (
    <div className="light">
      <Reset />

      <h1>light</h1>
    </div>
  );
}

export default Light;