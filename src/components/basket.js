function basket() {
  const products = [
    {
      name: "상품명 1",
      quantity: 1,
      price: 27000,
      discount: "5%",
      point: 270,
      shipping: "무료배송",
      subtotal: 27000,
    },
    {
      name: "상품명 2",
      quantity: 1,
      price: 27000,
      discount: "5%",
      point: 270,
      shipping: "무료배송",
      subtotal: 27000,
    },
    {
      name: "상품명 3",
      quantity: 1,
      price: 27000,
      discount: "5%",
      point: 270,
      shipping: "무료배송",
      subtotal: 27000,
    },
  ];

  return (
    <div className="interest">
      <div className="nemo"></div>
      <form action="#">
        <table className="basketTable" border="0">
          <tr>
            <th>
              <input type="checkbox" name="all" />
            </th>
            <th>상품명</th>
            <th>총수량</th>
            <th>판매가</th>
            <th>할인</th>
            <th>포인트</th>
            <th>배송비</th>
            <th>소계</th>
          </tr>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" name={index} />
              </td>
              <td>
                <article>
                  <a href="#">
                    <img src="https://via.placeholder.com/80x80" alt={index} />
                  </a>
                  <div>
                    <h2>
                      <a href="#">{product.name}</a>
                    </h2>
                    <p>상품설명</p>
                  </div>
                </article>
              </td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.point}</td>
              <td>{product.shipping}</td>
              <td>{product.subtotal}</td>
            </tr>
          ))}
        </table>
        <input type="button" name="del" value="선택삭제" />
        <div className="total">
          <h2>전체합계</h2>
          <table>
            <tr>
              <td>상품수</td>
              <td>{products.length}</td>
            </tr>
            <tr>
              <td>상품금액</td>
              <td>{products.reduce((acc, product) => acc + product.price, 0)}</td>
            </tr>
            <tr>
              <td>할인금액</td>
              <td>-1000</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td>0</td>
            </tr>
            <tr>
              <td>포인트</td>
              <td>{products.reduce((acc, product) => acc + product.point, 0)}</td>
            </tr>
            <tr>
              <td>전체주문금액</td>
              <td>
                {products.reduce((acc, product) => acc + product.subtotal, 0) - 1000}
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