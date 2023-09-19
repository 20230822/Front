// import PropTypes from "prop-types";
import "../style/Products.css";
import { useLocation } from "react-router";
import Items from "../components/items";
import { useEffect, useState } from "react";

// 가져온 주소의 한글아스키값과 일치하는 램프 이름을 선언한 객체
const lampAddress = [
  {
    address: "%ED%8E%9C%EB%8D%98%ED%8A%B8",
    lamp: "펜던트",
  },
  {
    address: "%ED%94%8C%EB%A1%9C%EC%96%B4%EB%9E%A8%ED%94%84",
    lamp: "플로어 램프",
  },
  {
    address: "%ED%85%8C%EC%9D%B4%EB%B8%94%EB%9E%A8%ED%94%84",
    lamp: "테이블 램프",
  },
  {
    address: "%EC%9B%94%EB%9E%A8%ED%94%84",
    lamp: "월 램프",
  },
];

function Products() {
  const [lightMethod, setLightMethod] = useState("");
  const [lightColor, setLightColor] = useState("");
  const [lampName, setLampName] = useState("");
  // 현재 주소의 경로이름만 가져오기
  const location = useLocation().pathname;
  // 주소가 바뀔때마다 실행
  useEffect(() => {
    // substr은 삭제된 기능이라고 하므로 substring으로 대체 10자리까지 자르고 저장
    const locationName = location.substring(10);

    // 주소 이름과 매치되는 램프 이름 설정
    const matchedLamp = lampAddress.find((lamp) => lamp.address === locationName);
    if (matchedLamp) {
      setLampName(matchedLamp.lamp);
    } else {
      // 일치하는 주소 이름이 없는 경우 초기화
      setLampName("");
    }
  }, [lampName, location]);

  const onClickLightM = (e) => {
    setLightMethod((pre) => e.target.innerText);
    if (lightMethod === e.target.innerText)
      setLightMethod(""); 
  };

  const onClickLightC = (e) => {
    setLightColor((pre) => e.target.innerText);
    if (lightColor === e.target.innerText)
      setLightColor(""); 
  };

  return (
    <div className="products">
      <div className="products-filter">
        <div className="filter-method">
          <ul className="method">
            <li className={`method-each ${lightMethod === "간접 조명" ? "active" : ""}`} onClick={onClickLightM}>간접 조명</li>
            <li className={`method-each ${lightMethod === "반 간접 조명" ? "active" : ""}`} onClick={onClickLightM}>반 간접 조명</li>
            <li className={`method-each ${lightMethod === "전반확산 조명" ? "active" : ""}`} onClick={onClickLightM}>전반확산 조명</li>
            <li className={`method-each ${lightMethod === "반 직접 조명" ? "active" : ""}`} onClick={onClickLightM}>반 직접 조명</li>
            <li className={`method-each ${lightMethod === "직접 조명" ? "active" : ""}`} onClick={onClickLightM}>직접 조명</li>
          </ul>
        </div>
        <div className="filter-color">
          <ul className="color">
            <li className={`color-each ${lightColor === "blue" ? "active" : ""}`} onClick={onClickLightC}>blue</li>
            <li className={`color-each ${lightColor === "white" ? "active" : ""}`} onClick={onClickLightC}>white</li>
            <li className={`color-each ${lightColor === "orange" ? "active" : ""}`} onClick={onClickLightC}>orange</li>
          </ul>
        </div>
      </div>

      <div className="products-root">
        <span className="root parent">{lampName}</span>
        {lightMethod !== "" ? <span className="root arrow"></span>: ""}
        {lightMethod !== "" ? <span className="root">{lightMethod}</span>: ""}
        <span className={`root-color ${lightColor !== "" ? lightColor : ""}`}></span>
      </div>

      <Items 
        path={lampName}
      />
    </div>
  );
}

export default Products;