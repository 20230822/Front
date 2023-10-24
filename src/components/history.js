import React from "react";
import "../style/history.css";

function Interest() {
  const products = [
    {
      name: "상품명 1",
      quantity: 1,
      explain: "상품설명1",
      subtotal: 27000,
      date: Date()
    },
    {
      name: "상품명 2",
      quantity: 1,
      explain: "상품설명2",
      subtotal: 27000,
      date: Date()
    },
    {
      name: "상품명 3",
      quantity: 1,
      explain: "상품설명3",
      subtotal: 27000,
      date: Date()
    },
  ];

  return (
    <div className="interest">
      <form className="inter" action="#">
        <table className="interest-table">
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
                <div className="basketProduct">
                  <img src="https://via.placeholder.com/80x80" alt={index} className="productImage" />
                  <div className="basketProductName">
                    <h2 className="ProductName">
                      {product.name}
                    </h2>
                    <p className="productExplain">{product.explain}</p>
                  </div>
                </div>
              </td>
              <td className="interest-quantity">{product.quantity}</td>
              <td className="interest-subtotal">{product.subtotal}</td>
              <td className="interest-date">{new Date(product.date).toLocaleString()}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Interest;
