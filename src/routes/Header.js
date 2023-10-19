//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link, useNavigate } from "react-router-dom";
import "../style/Header.css";
import Light from "../components/light";
import Search from "../components/search";
import { useEffect, useState } from "react";
import * as gvar from "../globalVar.js"


function Header() {
  const navigate = useNavigate();

  // 상품정보 저장
  const [Lamps, setLamps] = useState({
    category : "",
    pageListSize : 20,
    page: 1,
  });
  
  let resData = "hi";

  // 조명일러스트 class변환함수
  const onReset = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.className = "light 펜던트";
    e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.className = "light";
  };
  function onCheck(e) {
    
    if (e.target.innerText === "펜던트") {
      setLamps({
        category: 3,
        pageListSize: 20,
        page: 1,
      });
    }
    navigate.push({
      pathname: "/Products/펜던트", state: {data: resData},
    });
  };

  useEffect(() => {
    onClickLamp();
  },[Lamps]) 

  // api 연결
  async function onClickLamp() {
    // 정보 전달 함수
    try {
      const response = await fetch('/api/product/category', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Lamps),
      });

      if (response.ok) {
        const res = await response.json();

        if (res.success) {
          resData = res.data;
            console.log(resData);
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      console.error(Error('불러오는 중 에러 발생'));
    }
  };

  return (
    <div className="header">
      <div className="light-illustration">
        <Light />
      </div>
      
      <div className="menu">
        <div className="menu-top">
          <h1><Link className="menu-title" to={"/"} onClick={onReset}>Light Mall</Link></h1>
          <ul className="menu-help">
            <li><Link className="menu-help-item" to={"/Login"}>로그인</Link></li> {/* 로그인 시 로그아웃으로 */}
            <li><Link className="menu-help-item" to={"/MyPage"}>마이페이지</Link></li>
            <li><Link className="menu-help-item" to={"/Help"}>고객센터</Link></li>
          </ul>
        </div>
        
        <div className="menu-bottom">
          <nav>
            <span><Link className="menu-category-item" to={{pathname: "/Products/펜던트", state: {data: resData}}} onClick={onCheck}>펜던트</Link></span>
            <span><Link className="menu-category-item" to={"/Products/플로어램프"}>플로어 램프</Link></span>
            <span><Link className="menu-category-item" to={"/Products/테이블램프"}>테이블 램프</Link></span>
            <span><Link className="menu-category-item" to={"/Products/월램프"}>월 램프</Link></span>
          </nav>

          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;