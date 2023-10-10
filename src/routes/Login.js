import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../images/shine.png"
import "../style/Login.css";
import * as gvar from "../globalVar.js"
/*백엔드에게 넘길떄 위 환경변수 삭제*/

function Login() {
  const navigate = useNavigate();
  
  const [formDataLogin, setFormDataLogin] = useState({
    id: "",
    psword: "",
  });

  const [formData, setFormData] = useState({
    id: "",
    psword: "",
    confirm_psword: "",
    name: "",
    email: "",
    phone_num: "",
    adress: "",
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
      alert("아이디와 비밀번호를 모두 입력해");
      return; // 함수 종료
    }

    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/login', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        formData.id === "" ||formData.psword === "" ||formData.confirm_psword === "" ||
        formData.name === "" ||formData.email === "" ||formData.phone_num === "" ||
        formData.adress === ""
      ) {
        // 어떤 입력란이라도 비어있는 경우
        alert("모든 필드를 입력해");
        return; // 함수 종료
      }
      console.log(formData);
      // 정보 전달 함수
      try {
        const response = await fetch('api/register', {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const res = await response.json();
  
          if(res.success) {
            navigate("/Login");
          } else {
            alert(res.msg);
          }
        } else {
          throw Error("서버 응답 실패");
        }
        
      } catch(err) {
        console.error(Error('회원가입 중 에러 발생'));
      }
    };

  return (
    <div className="login">
      <div className="box"></div>
      
      <div className="card-switch">
        <label className="switch">
          <input className="toggle" type="checkbox" />
          <span className="slider"></span>
          <img className="image" src={image1} alt="로그인 사진"/>
          <span className="card-side"></span>
          <div className="flip-card__inner">
          <div className="flip-card__front">
              <form onSubmit={handleSubmitLogin} className="flip-card__form">
                <div className="input-group">
                  <label htmlFor="userID">UserID</label>
                  <input classname={`flip-card__input ${formDataLogin.id === "" ? "warning" : ""}`}
                    type="text"id="id"name="id"placeholder="ID"
                    value={formDataLogin.id}onChange={handleInputChangeLogin}
                  />
                  </div>
                  <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input classname="flip-card__input"
                    type="password"id="psword"name="psword"placeholder="PW"
                    value={formDataLogin.psword}onChange={handleInputChangeLogin}
                  />
                  </div>
                  <div className="input-group">
                  <input type="submit" value="Login" />
                  </div>
              </form>
            </div>
          <div className="flip-card__back">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="id">id</label>
                  <input
                    type="text" id="id" name="id" placeholder="ID"
                    value={formData.id} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="psword">Password</label>
                  <input
                    type="text" id="psword" name="psword" placeholder="PW"
                    value={formData.psword} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="confirm_psword">confirm</label>
                  <input
                    type="text" id="confirm_psword" name="confirm_psword" placeholder="confirm_psword"
                    value={formData.confirm_psword} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="name">UserName</label>
                  <input
                    type="text" id="name" name="name" placeholder="Name"
                    value={formData.name} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="email">email</label>
                  <input
                    type="text" id="email" name="email" placeholder="email"
                    value={formData.email} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="phone_num">phone number</label>
                  <input
                    type="text" id="phone_num" name="phone_num" placeholder="phoneNumber"
                    value={formData.phone_num} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <label htmlFor="adress">address</label>
                  <input
                    type="text" id="adress" name="adress" placeholder="address"
                    value={formData.adress} onChange={handleInputChange}
                  />
                  </div>
                  <br />
                  <div className="input-group">
                  <input type="submit" value="Sign UP" onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Login;

