//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/item.css";

const lights = [
  {
    title: "first",
    description: "good",
  },
  {
    title: "second",
    description: "bad",
  },
  {
    title: "third",
    description: "bad",
  },
  {
    title: "fourth",
    description: "bad",
  },
  {
    title: "fifth",
    description: "bad",
  },
  {
    title: "fifth",
    description: "bad",
  },
  {
    title: "...",
    description: "bad",
  },
];
function Items( {path} ) {
  // 주소창 공백 제거를 위한 변수
  const pathName = path.replace(/ /g, "");
  
  return (
    <div className="products-items">
      {lights.map((lights, index) => {
        return (
          <Link className="item-box" to={`/Products/${pathName}/${lights.title}`} key={index}>
            <h1>{lights.title}</h1>
            <p>{lights.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

// 인자를 받아올 때 사용해야 할 검사와 같은 기능
Items.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Items;