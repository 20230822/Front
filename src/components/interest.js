import { useEffect, useRef, useState } from "react";
import * as gvar from "../globalVar.js"
import "../style/interest.css";

function Interest() {
  const [products, setProducts] = useState([
    {
      PRODUCT_FK: "",
      IMG_DATA: "",
    },
  ]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 중 여부

  async function apiInterest() {
    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/mypage/wishlist', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "",
        },
        body: JSON.stringify(products),
      });
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setLoading(false);
          setProducts(res.data);
        } else {
          alert(res.msg);
        }
      } else {
        setLoading(true);
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      setLoading(true);
      console.error(Error('로그인 중 에러 발생'));
    }
  };

  const carousel = useRef(null);


  useEffect(() => {
    apiInterest();
  }, [])

  return (
    <div className="interest">
      <div className="article-image">
        <div className="items-recommend" ref={carousel}>
        {loading === false ? 
          products.map((product, index) => (
            <img key={index} className="items" 
            src = {`data:image/jpeg;base64,${product.IMG_DATA}`} alt={index}/> )) 
          : <div className="interest-loading">loading...</div>
        }
        </div>
      </div>
    </div>
  );
}

export default Interest;
