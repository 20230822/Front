import { useEffect, useRef, useState } from "react";
import * as gvar from "../globalVar.js"

function Interest() {
  const [products, setProducts] = useState([
    {
      PRODUCT_FK: "",
      IMG_DATA: "",
    },
  ]);

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
          setProducts(res.data);
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

  const carousel = useRef(null);


  useEffect(() => {
    apiInterest();
  }, [])

  return (
    <div className="interest">
      <div className="article-image">
        <div className="article-recommend" ref={carousel}>
        {products.map((product, index) => (
            <img key={index} className="article-recommend-items" 
            src = {`data:image/jpeg;base64,${product.IMG_DATA}`} alt={index}/> 
        ))}
        </div>
      </div>
    </div>
  );
}

export default Interest;
