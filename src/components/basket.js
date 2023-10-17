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
      <form action="#">
        <div>
          <table className="basketTable" border="0">
            <tr>
              <th>
                <input type="checkbox" name="all" />
              </th>
              <th>상품명</th>
              <th>총수량</th>
              <th>판매가</th>
              <th>총액</th>
            </tr>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name={index} />
                </td>
                <td>
                  <article>
                    <img src="https://via.placeholder.com/80x80" alt={index} />
                    <div>
                      <h2>
                        {product.name}
                      </h2>
                      <p>상품설명</p>
                    </div>
                  </article>
                </td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.subtotal}</td>
              </tr>
            ))}
          </table>
          <input type="button" name="del" value="선택삭제" />
        </div>
        <div className="total">
          <h2>전체합계</h2>
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