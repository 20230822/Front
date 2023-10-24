import { useEffect, useState } from "react";
import "../style/MyPage.css";
import Interest from "../components/interest";
import History from "../components/history";
import Basket from "../components/basket";
import * as gvar from "../globalVar.js"

function MyPage() {
  const [decodedImageData, setDecodedImageData] = useState(null);
  const [category, setLightMethod] = useState("");
  const [formMypage, setFormMypage] = useState({
    USER_NM: "",
    USER_ID: "",
    PROFILE_DATA: "",
  });

  const onClickCategory = (e) => {
    setLightMethod((pre) => e.target.innerText);
    if (category === e.target.innerText)
      setLightMethod("");
  };

  function decoding(data) {
    const uint8Array = new Uint8Array(data);

    // Create a Blob from the Uint8Array
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });

    // Read the Blob as a data URL
    const reader = new FileReader();
    reader.onload = () => {
      setDecodedImageData(reader.result);
    };
    reader.readAsDataURL(blob);
  };

  useEffect(()=>{
    async function MypageApi() {
      try {
        const response = await fetch(gvar.REACT_APP_URL + '/api/mypage', {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formMypage),
        });
        console.log("에러1" + document.cookie);
        if (response.ok) {
          const res = await response.json();
          
          if (res.success) {
            setFormMypage({
              name: res.name,
              message: res.message,
              expiredAt: res.expiredAt,
            })
          } else {
            alert(res.msg);
          }
        } else {
          console.log("Throw");
          throw Error("서버 응답 실패");
        }
      } catch (err) {

        console.error(Error('불러오는 중 에러 발생'));
      }
    };
      
    MypageApi();
  }, [formMypage])

  return (
    <div className="Mypage">
      <div className="profileContent">
        <img className="profileImage" src={decodedImageData} alt="프사" />
        <div className="my-info" >
          <span className="my-info-text">이름 {formMypage.USER_NM}</span>
          <span className="my-info-text">이메일 {formMypage.USER_ID}</span>
          <span className="my-info-text">전화번호 { }</span>
          <span className="my-info-text">주소</span>
        </div>
      </div>
      <div className="filter-category">
        <ul className="category">
          <li className={`category-each ${category === "관심 상품" ? "active" : ""}`} onClick={onClickCategory}> 관심 상품</li>
          <li className={`category-each ${category === "장바구니" ? "active" : ""}`} onClick={onClickCategory}>장바구니</li>
          <li className={`category-each ${category === "구매 내역" ? "active" : ""}`} onClick={onClickCategory}>구매 내역</li>
        </ul>
      </div>
      <div className="Mypage_content">
        {category === "관심 상품" && <Interest />}
        {category === "장바구니" && <Basket />}
        {category === "구매 내역" && <History />}
      </div>
    </div>
  );
}

export default MyPage;
