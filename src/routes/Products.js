// import PropTypes from "prop-types";
import "../style/Products.css";
import { useLocation } from "react-router";

function Products() {
  const lights = [
    {
      title: "first",
      description: "good",
    },
    {
      title: "second",
      description: "bad",
    },
  ];

  // 현재 주소를 가져와 어떤 램프인지 알려주는 기능 이를 통해 현재 카테고리를 맞게 출력
  const location = useLocation().pathname;
  console.log(location);
  // substr은 삭제된 기능이라고 하므로 substring으로 대체
  const test = location.substring(10);
  console.log(test);
  
  return (
    <div className="products">
      <div className="products-filter">
        <div className="filter-method">
          <ul className="method">
            <li className="method-each">간접 조명</li>
            <li className="method-each">반 간접 조명</li>
            <li className="method-each">전반확산 조명</li>
            <li className="method-each">반 직접 조명</li>
            <li className="method-each">직접 조명</li>
          </ul>
        </div>
        <div className="filter-color">
          <ul className="color">
            <li className="color-each"></li>
            <li className="color-each"></li>
            <li className="color-each"></li>
          </ul>
        </div>
      </div>

      <div className="products-root">
        <span className="root parent">팬던트 조명</span>
        <span className="root arrow">arrow</span>
        <span className="root child">조명 방식</span>
        <span className="root arrow">arrow</span>
        <span className="root child">color</span>
      </div>
      
      <div className="products-items">
        {lights.map((lights, index) => {
          return (
            <div className="item-box" key={index}>
              <h1>{lights.title}</h1>
              <p>{lights.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// 만약 인자를 받아온다면 사용해야할 검사와같은 기능
// Products.propTypes = {
//   path: PropTypes.string.isRequired,
// };

export default Products;