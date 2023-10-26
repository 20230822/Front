import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import * as gvar from "../globalVar.js"
import * as addr from "../copy.js"
/*백엔드에게 넘길떄 위 환경변수 삭제*/

function Login() {
  // const [islogin, setIslogin] = useState(false);
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [formDataLogin, setFormDataLogin] = useState({
    id: "",
    psword: "",
  });

  const [formData, setFormData] = useState({
    id: "",
    psword: "",
    confirm_psword: "",
    name: "",
    img_type: "image/jpeg",
    img_data : addr.Addr,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormDataLogin({
      ...formDataLogin,
      [name]: value,
    });
  };

  // 백엔드로 값을 보내주는 함수
  // then 대신 async 사용
  async function handleSubmitLogin(e) {
    e.preventDefault();
    if (formDataLogin.id === "" || formDataLogin.psword === "") {
      // 아이디 또는 비밀번호가 비어있는 경우
      alert("아이디와 비밀번호를 모두 입력하세요.");
      return; // 함수 종료
    }
    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/login', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "",
        },
        body: JSON.stringify(formDataLogin),
      });
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          navigate("/");
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      console.error(Error('로그인 중 에러 발생'));
    }
  };

  // 폼 제출 핸들러
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.id === "" || formData.psword === "" || formData.confirm_psword === "" ||
      formData.name === "" 
    ) {
      // 어떤 입력란이라도 비어있는 경우
      alert("모든 입력란을 입력하세요.");
      return; // 함수 종료
    }
    console.log(formData);
    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/register', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const res = await response.json();

        if (res.success) {
          setIsFlipped(!isFlipped)
          alert("회원가입에 성공하였습니다")
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }

    } catch (err) {
      console.error(Error('회원가입 중 에러 발생'));
    }
  };

  return (
    <div className="login">
      <div className="box">
        <div className={`left-box ${isFlipped ? "Activie" : ""}`}>
          <form onSubmit={handleSubmitLogin} className="flip-card-front">
            <label htmlFor="userID">UserID</label>
            <input className="input-group"
              type="text" name="id" placeholder="ID"
              value={formDataLogin.id} onChange={handleInputChangeLogin} />
            <label htmlFor="password">Password</label>
            <input className="input-group"
              type="password" name="psword" placeholder="PW"
              value={formDataLogin.psword} onChange={handleInputChangeLogin} />
            <input className="buttonToLogin" type="submit" value="Login" />
          </form>
          <form onSubmit={handleSubmit} className="flip-card-back">
            <label htmlFor="id">id</label>
            <input className="input-group"
              type="text" name="id" placeholder="ID"
              value={formData.id} onChange={handleInputChange} />
            <br />
            <label htmlFor="psword">Password</label>
            <input className="input-group"
              type="text" name="psword" placeholder="PW"
              value={formData.psword} onChange={handleInputChange} />
            <br />
            <label htmlFor="confirm_psword">confirm</label>
            <input className="input-group"
              type="text" name="confirm_psword" placeholder="confirm_psword"
              value={formData.confirm_psword} onChange={handleInputChange} />
            <br />
            <label htmlFor="name">UserName</label>
            <input className="input-group"
              type="text" name="name" placeholder="Name"
              value={formData.name} onChange={handleInputChange} />
            <br />
            <input className="buttonToSignUp" type="submit" value="Sign UP" onClick={handleSubmit} />
          </form>
        </div>
        <div className="light">
        </div>
        <div className="right-box" onClick={() => setIsFlipped(!isFlipped)}>
          <label className={`switch ${isFlipped ? "Activie" : ""}`} >
            <div className="text">
              <div className={`left-text`}>login</div>
              <div className={`right-text`}>Sign UP</div>
            </div>
            <div className={`slider ${isFlipped ? "Activie" : ""}`}></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;

