import { useState } from "react";
import image1 from "../images/banner1.jpeg";
import "../style/MyPage.css";
import Interest from "../components/interest";
import History from "../components/history";
import Recommend from "../components/recommend";
import Basket from "../components/basket";

function MyPage() {
  const [category, setLightMethod] = useState("");

  const onClickCategory = (e) => {
    setLightMethod((pre) => e.target.innerText);
    if (category === e.target.innerText)
      setLightMethod("");
  };

  return (
    <div className="Mypage">
      <div className="profileContent">
        <img className="profileImage" src={image1} alt="프로필 사진" />
        <div className="my-info">
          <span className="my-info-text">이름</span>
          <span className="my-info-text">이메일</span>
          <span className="my-info-text">전화번호</span>
          <span className="my-info-text">주소</span>  
        </div>
      </div>
      <div className="filter-category">
        <ul className="category">
          <li className={`category-each ${category === "관심 상품" ? "active" : ""}`} onClick={onClickCategory}> 관심 상품</li>
          <li className={`category-each ${category === "추천상품" ? "active" : ""}`} onClick={onClickCategory}>추천상품</li>
          <li className={`category-each ${category === "장바구니" ? "active" : ""}`} onClick={onClickCategory}>장바구니</li>
          <li className={`category-each ${category === "구매 내역" ? "active" : ""}`} onClick={onClickCategory}>구매 내역</li>
        </ul>
      </div>
      <div className="Mypage_content">
        {category === "관심 상품" && <Interest />}
        {category === "추천상품" && <Recommend />}
        {category === "장바구니" && <Basket />}
        {category === "구매 내역" && <History />}
      </div>
    </div>
  );
}

export default MyPage;
