import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../images/banner1.jpeg";
import "../style/Login.css";

function SignUp() {
  const navigate = useNavigate();
  // 상태(State)를 객체로 관리.
  const [formData, setFormData] = useState({
    id: "",
    psword: "",
    confirm_psword: "",
    name: "",
    email: "",
    phone_num: "",
    adress: "",
  });

  // 입력 값 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  async function handleSubmit(e) {
    e.preventDefault();
    
    // 정보 전달 함수
    try {
      const response = await fetch('/register', {
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
    <div className="signup">
      <img className="image" src={image1} alt="사진"/>
      <div className="box"></div>
      <div className="login-container">
        <h2>SIGN UP</h2>
        <div className = "blur"></div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="id">id</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="psword">Password</label>
            <input
              type="text"
              id="psword"
              name="psword"
              placeholder="PW"
              value={formData.psword}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="confirm_psword">confirm_psword</label>
            <input
              type="text"
              id="confirm_psword"
              name="confirm_psword"
              placeholder="confirm_psword"
              value={formData.confirm_psword}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="phone_num">phone number</label>
            <input
              type="text"
              id="phone_num"
              name="phone_num"
              placeholder="phoneNumber"
              value={formData.phone_num}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="adress">address</label>
            <input
              type="text"
              id="adress"
              name="adress"
              placeholder="address"
              value={formData.adress}
              onChange={handleInputChange}
            />
            <br />
            <input type="submit" value="Sign UP" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
