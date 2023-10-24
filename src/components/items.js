//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/item.css";
import { useEffect, useState } from "react";

function Items( props ) {
  // 불러온 데이터를 배열형태로 저장할 변수
  const [light, setLight] = useState([]);

  useEffect(() => {
    setLight(props.data);
  }, [props]);


  // //주소창에 현재 램프 종류를 뛰우기 위한 과정들
  // let pathName = "";
  // if(path === "펜던트" || path === "플로어 램프" || path === "테이블 램프" || path === "월 램프")
  //   pathName = path.replace(/ /g, ""); // 주소창 공백 제거를 위한 변수
  
  // // 이미지 데이터를 base64로 변환하여 반환하는 함수
  // function arrayBufferToBase64(buffer) {
  //   let binary = "";
  //   let bytes = new Uint8Array(buffer);
  //   let len = bytes.byteLength;
  //   for (let i = 0; i < len; i++) {
  //     binary += String.fromCharCode(bytes[i]);
  //   }
  //   return window.btoa(binary);
  // }

  // 렌더링 속도보다 가져오는 속도가 느리면 빈값이 뜨게 되므로 if조건문을 같이 작성 해줘야 오류가 발생하지 않는다.
  // useEffect(() => {
  //   if(state) {
  //     setLight((state));
  //   }
  // }, [state]);

  useEffect(() => {
    console.log(light);
  }, [light]);

  return (
    <div className="products-items">
      {light !== "" && light.map((light, index) => (
      <Link className="item-box" to={`/Products/ji/ㅗㅑ`} key={index} state={""}>
        <h1>hi</h1>
        <p>goo</p>
        {/* <img src={`data:image/png;base64,${base64Image}`} alt="" /> */}
      </Link>
    ))}
    </div>
  );
}

// 인자를 받아올 때 사용해야 할 검사와 같은 기능
Items.propTypes = {
  path: PropTypes.string.isRequired,
  state: PropTypes.array,
};

export default Items;