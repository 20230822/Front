import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Items from "../components/items";
import "../style/Products.css";

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
  const [lampName, setLampName] = useState("");
  // 현재 주소의 경로이름만 가져오기
  const location = useLocation().pathname;
  const product = useRef();
  // api관련 변수들
  const [Lamps, setLamps] = useState({
    category : "",
    pageListSize : "",
    page: "",
  });
  const [data, setData] = useState("");

  // 주소가 바뀔때마다 실행
  useEffect(() => {
    // substr은 삭제된 기능이므로 substring으로 대체 10자리까지 자르고 저장
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

  //조명 방식 디스플레이
  const onClickLightM = (e) => {
    setLightMethod(() => e.target.innerText);
    if (lightMethod === e.target.innerText)
      setLightMethod(""); 
  };

  // light 이미지를 바꾸기 위해 className을 바꿔주는 함수
  useEffect(() => {
    product.current.parentElement.firstChild.firstChild.firstChild.className = `light ${lampName}`;
    product.current.parentElement.firstChild.firstChild.firstChild.firstChild.className = `light ${lightMethod}`;
  }, [lampName, lightMethod]);

   // 일치하는 카테고리 api전달에 사용하는 함수
   useEffect(() => {
    if (lampName === "펜던트") {
      setLamps({
        category: 3,
        pageListSize: 20,
        page: 1,
      });
    }
    if (lampName === "플로어 램프") {
      setLamps({
        category: 2,
        pageListSize: 20,
        page: 1,
      });
    }
    // }if (lampName === "테이블 램프") {
    //   setLamps({
    //     category: 3,
    //     pageListSize: 20,
    //     page: 1,
    //   });
    // }if (lampName === "월 램프") {
    //   setLamps({
    //     category: 3,
    //     pageListSize: 20,
    //     page: 1,
    //   });
  }, [lampName]);

  // 상품 데이터 요청
  async function onClickLamp() {
    // 정보 전달 함수
    try {
      const response = await fetch('https://port-0-node-express-jvvy2blmegkftc.sel5.cloudtype.app/api/product/category', {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Lamps),// Lamps 값을 JSON 문자열로 변환하여 요청 
      });
  
      // 연결 성공 유무 판단
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setData(res.data); //데이터 저장
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      console.error(Error('불러오는 중 에러 발생'));
    }
  };

  useEffect(() => {
    onClickLamp();
  },[Lamps])

    // useEffect(() => {
    //   console.log(data);
    // },[data]) 

  return (
    <div className="products" ref={product}>
      <div className="products-filter">
        <div className="filter-method">
          <ul className="method">
            <li className={`method-each ${lightMethod === "간접 조명" ? "active" : ""}`} onClick={onClickLightM}>간접 조명</li>
            <li className={`method-each ${lightMethod === "반간접 조명" ? "active" : ""}`} onClick={onClickLightM}>반간접 조명</li>
            <li className={`method-each ${lightMethod === "전반확산 조명" ? "active" : ""}`} onClick={onClickLightM}>전반확산 조명</li>
            <li className={`method-each ${lightMethod === "반직접 조명" ? "active" : ""}`} onClick={onClickLightM}>반직접 조명</li>
            <li className={`method-each ${lightMethod === "직접 조명" ? "active" : ""}`} onClick={onClickLightM}>직접 조명</li>
          </ul>
        </div>
      </div>

      <div className="products-root">
        <span className="root parent">{lampName}</span>
        {lightMethod !== "" ? <span className="root arrow"></span>: ""}
        {lightMethod !== "" ? <span className="root">{lightMethod}</span>: ""}
      </div>

      <Items 
        path={lampName}
        data={data}
      />
    </div>
  );
}

export default Products;