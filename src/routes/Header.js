//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import "../style/Header.css";
import Light from "../components/light";
import Search from "../components/search";

function Header() {
  const onReset = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.className = "light 펜던트";
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
            <li className="menu-help-item">고객센터</li>
          </ul>
        </div>
        
        <div className="menu-bottom">
          <nav>
            <span><Link className="menu-category-item" to={"/Products/펜던트"}>펜던트</Link></span>
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