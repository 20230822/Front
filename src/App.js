import "./style/App.css";
//npm install react-router-dom 설치 후 사용 가능
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      
      <h1>hi</h1>
    </div>
  );
}

export default App;
