//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import "../style/item.css";
import { useEffect, useState } from "react";

function Items( props ) {
  // 불러온 데이터를 배열형태로 저장할 변수
  const [light, setLight] = useState([]);

  useEffect(() => {
    setLight(props.data);
  }, [props]);

  // useEffect(() => {
  //   console.log(light);
  // }, [light]);

  return (
    <div className="products-items">
      {light !== "" && light.map((light, index) => (
      <Link className="item-box" to={`/Products/ji/ㅗㅑ`} key={index} state={""}>
        <h1>hi</h1>
        <p>goo</p>
      </Link>
    ))}
    </div>
  );
}

export default Items;