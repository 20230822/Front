import React from "react";
import { useEffect, useState } from "react";
import "../style/history.css";

function History() {
  const [products, setProducts] = useState([
    {
      PRODUCT_FK: "",
      PRODUCT_NM: "",
      ORDER_NO: "",
      PRICE:"",
      ORDER_DT: "",
      IMG_DATA: ""
    },
  ]);

  async function apiHistory() {
    // 정보 전달 함수
    try {
      const response = await fetch('/api/mypage/order', {
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

  useEffect(() => {
    apiHistory();
  }, [])


  return (
    <div className="history">
      <form className="inter" action="#">
        <table className="history-table">
          <thead>
          <tr>
          <th className="productDescription">상품명</th>
          <th>총수량</th>
          <th>판매가</th>
          <th>주문일자</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product, index) => (
            <tr key={index} className="basketTr">
              <td>
                <div className="historyProduct">
                  <img src = {`data:image/jpeg;base64,${product.IMG_DATA}`} alt={index} className="productImage" />
                  <div className="basketProductName">
                    <h2 className="ProductName">
                      {product.PRODUCT_NM}
                    </h2>
                  </div>
                </div>
              </td>
              <td className="history-quantity">{product.ORDER_NO}</td>
              <td className="history-subtotal">{product.PRICE}</td>
              <td className="history-date">{new Date(product.ORDER_DT).toLocaleString()}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default History;
