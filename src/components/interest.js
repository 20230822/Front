import { useEffect, useState, useRef } from "react";
import Items from "../components/items";
import * as gvar from "../globalVar.js";

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
      const response = await fetch(gvar.REACT_APP_URL + "/api/mypage/wishlist", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
        body: JSON.stringify(products),
      });
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setLoading(false); // 로딩이 끝남을 의미
          setProducts(res.data);
        } else {
          alert(res.msg);
        }
      } else {
        setLoading(true);
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      console.error(Error("로그인 중 에러 발생"));
    }
  }

  const carousel = useRef(null);

  useEffect(() => {
    apiInterest();
  }, []);

  return (
    <div className="interest">
      {loading === false ? (
        <Items products={products} where={"I"} />
      ) : (
        <div className="products-loading">loading...</div>
      )}
    </div>
  );
}

export default Interest;
