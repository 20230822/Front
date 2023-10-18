import "../style/basket.css"

function basket() {
  const products = [
    {
      name: "상품명 1",
      quantity: 1,
      price: 27000,
      subtotal: 27000,
    },
    {
      name: "상품명 2",
      quantity: 1,
      price: 27000,
      subtotal: 27000,
    },
    {
      name: "상품명 3",
      quantity: 1,
      price: 27000,
      subtotal: 27000,
    },
  ];

  return (
    <div className="basket">
      <form className = "basket_container" action="#">
        <div className="left">
          <table className="basketTable" border="0">
            <tr>
              <th>
                <input type="checkbox" name="all" className="checkboxAll"/>
              </th>
              <th className="productDescription">상품명</th>
              <th>총수량</th>
              <th>판매가</th>
              <th>총액</th>
            </tr>
            {products.map((product, index) => ( 
              <tr key={index} className="basketTr">
                <td className="basketCheckbox">
                  <input type="checkbox" name={index} />
                </td>
                <td>
                  <div className="basketProduct">
                    <img src="https://via.placeholder.com/80x80" alt={index} className="productImage" />
                    <div className="basketProductName">
                      <h2 className="ProductName">
                        {product.name}
                      </h2>
                      <p>상품설명</p>
                    </div>
                  </div>
                </td>
                <td className="basket-quantity">{product.quantity}</td>
                <td className="basket-price">{product.price}</td>
                <td className="basket-subtotal">{product.subtotal}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="total">
          <h2>주문 총합</h2>
          <table>
            <tr>
              <td>상품수</td>
              <td>{products.length}</td>
            </tr>
            <tr>
              <td>전체주문금액</td>
              <td>
                {products.reduce((acc, product) => acc + product.subtotal, 0)}
              </td>
            </tr>
          </table>
          <input type="submit" value="주문하기" />
        </div>
      </form>
    </div>
  );
}

export default basket;