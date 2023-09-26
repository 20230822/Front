import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import image1 from "../images/banner1.jpeg";
import "../style/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    id: "",
    psword: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Sign Up 페이지에서 전달받은 데이터를 확인
    if (location.state && location.state.signUpData) {
      const { id, psword } = location.state.signUpData;
      setFormData({
        id,
        psword,
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

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    // 정보 전달 함수
    try {
      const response = await fetch('https://port-0-node-express-jvvy2blmegkftc.sel5.cloudtype.app/login?', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const res = await response.json();

        if(res.success) {
          navigate("/");
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
      
    } catch(err) {
      console.error(Error('로그인 중 에러 발생'));
    }
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
              id="id"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="psword"
              name="psword"
              placeholder="PW"
              value={formData.psword}
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
    </div>
  );
}

export default Login;
