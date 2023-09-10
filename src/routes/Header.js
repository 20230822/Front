// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import { useState } from "react";
//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import "../style/Header.css";
import Light from "../components/light";
import Search from "../components/search";

function Header() {
  return (
    <div className="header">
      <Reset />

      <div className="light-illustration">
        <Light />
      </div>
      
      <div className="menu">
        <div className="menu-top">
          <h1><Link className="menu-title" to={"/"}>Light Mall</Link></h1>
          <ul className="menu-help">
            <li className="menu-help-item">로그인</li> {/* 로그인 시 로그아웃으로 */}
            <li className="menu-help-item">마이페이지</li>
            <li className="menu-help-item">고객센터</li>
          </ul>
        </div>
        
        <div className="menu-bottom">
          <nav>
            <span className="menu-category-item">펜던트</span>
            <span className="menu-category-item">플로어 램프</span>
            <span className="menu-category-item">테이블 램프</span>
            <span className="menu-category-item">월 램프</span>
          </nav>

          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;