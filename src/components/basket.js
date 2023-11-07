import React, { useState, useEffect } from "react";
import "../style/basket.css"
import * as gvar from "../globalVar.js"

function Basket() {
  const [products, setProducts] = useState([
    {
      PRODUCT_NM: "",
      QUANTITY: "",
      PRICE: "",
      IMG_DATA: "",
    },
  ]);

  async function apiBasket() {
    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/mypage/cart', {
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
    apiBasket();
  }, []);


  return (
    <div className="basket">
      <form className="basket_container">
        <div className="left">
          <table className="basketTable">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="all" className="checkboxAll" />
                </th>
                <th className="productDescription">상품명</th>
                <th>총수량</th>
                <th>판매가</th>
                <th>총액</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="basketTr">
                  <td className="basketCheckbox">
                    <input type="checkbox" name={index} />
                  </td>
                  <td>
                    <div className="basketProduct">
                      <img src={`data:image/jpeg;base64,${product.IMG_DATA}`} alt={index} className="productImage" />
                      <div className="basketProductName">
                        <h2 className="ProductName">
                          {product.PRODUCT_NM}
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="basket-quantity">{product.QUANTITY}</td>
                  <td className="basket-price">{product.PRICE}</td>
                  <td className="basket-subtotal">{product.PRICE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="total">
          <h2>주문 총합</h2>
          <table>
            <thead>
              <tr>
                <td>상품수</td>
                <td>{products.length}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전체주문금액</td>
                <td>
                  {products.reduce((acc, product) => acc + product.PRICE, 0)}
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="주문하기" />
        </div>
      </form>
    </div>
  );
}

export default Basket;