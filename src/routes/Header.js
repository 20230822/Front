//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import "../style/Header.css";
import Light from "../components/light";
import Search from "../components/search";
import { useEffect, useState } from "react";
// import * as gvar from "../globalVar.js";


function Header() {
  // 상품정보 저장
  const [Lamps, setLamps] = useState({
    category : "",
    pageListSize : "",
    page: "",
  });

  // 연결한 데이터를 저장하는 변수
  const [data, setData] = useState("");

  // 조명일러스트 class변환함수
  const onReset = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.className = "light 펜던트";
    e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.className = "light";
  };

  // 조명이름에 따라 카테고리 값 지정
  function onCheck(e) {
    if (e.target.innerText === "펜던트") {
      setLamps({
        category: 3,
        pageListSize: 20,
        page: 1,
      });
    }
  };

  // lamp값이 바뀌면 api요청
  useEffect(() => {
    onClickLamp();
  },[Lamps]) 

  // api 연결
  async function onClickLamp() {
    // 정보 전달 함수
    try {
      const response = await fetch('https://port-0-node-express-jvvy2blmegkftc.sel5.cloudtype.app/api/product/category', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Lamps),// Lamps 값을 JSON 문자열로 변환하여 요청 
      });

      // 연결 성공 유무 판단
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setData(res.data); //데이터 저장
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
            {/* onclick이벤트 전에 state를 전달하면 빈값으로 전달되기에 순서지켜주기 */}
            {/* 또한 과거버전은 to에 state를 썼지만 v6부터는 따로 써야한다고 한다. */}
            <span><Link className="menu-category-item" to={"/Products/펜던트"} onClick={onCheck} state={{data: data}}>펜던트</Link></span> 
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