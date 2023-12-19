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
  const [loading, setLoading] = useState(true); // 데이터 로딩 중 여부

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

   // 일치하는 카테고리 api전달에 사용하는 함수
   useEffect(() => {
    if (lampName === "펜던트") {
      setLamps({
        category: 10,
        pageListSize: 20,
        page: 1,
      });
    } else if (lampName === "플로어 램프") {
      setLamps({
        category: 20,
        pageListSize: 20,
        page: 1,
      });
    } else if (lampName === "테이블 램프") {
      setLamps({
        category: 30,
        pageListSize: 20,
        page: 1,
      });
    } else if (lampName === "월 램프") {
      setLamps({
        category: 40,
        pageListSize: 20,
        page: 1,
      });
    }
  }, [lampName]);

  // 펜던트 이름이 바뀌면 조명방식에 대한 값이 초기화
  useEffect(() => {
    setLightMethod("");
  }, [lampName]);

  // 간접, 반간접, 전반확산, 반직접, 직접에 대한 클릭 기능
  const onClickLightM = (e) => {
    const text = e.target.innerText;
    // 조명 방식 디스플레이(일러스트 보여주는 곳)
    setLightMethod(text);
    if (lightMethod === text)
      setLightMethod(""); 

    // api요청 기본값 저장을 위한 조건문
    let Pendant = "";
    if (lampName === "펜던트") {
      Pendant = 10;
    } else if (lampName === "플로어 램프") {
      Pendant = 20;
    } else if (lampName === "테이블 램프") {
      Pendant = 30;
    } else if (lampName === "월 램프") {
      Pendant = 40;
    }

    // 조건에 따른 계산 식
    if (text === "간접 조명" && Lamps.category !== Pendant + 1) {
      Lamps.category = Pendant + 1;
    } else if (Lamps.category === Pendant + 1) {
      Lamps.category = Pendant;
    }
    if (text === "반간접 조명" && Lamps.category !== Pendant + 2) {
      Lamps.category = Pendant + 2;
    } else if (Lamps.category === Pendant + 2) {
      Lamps.category = Pendant;
    }
    if (text === "전반확산 조명" && Lamps.category !== Pendant + 3) {
      Lamps.category = Pendant + 3;
    } else if (Lamps.category === Pendant + 3) {
      Lamps.category = Pendant;
    }
    if (text === "반직접 조명" && Lamps.category !== Pendant + 4) {
      Lamps.category = Pendant + 4;
    } else if (Lamps.category === Pendant + 4) {
      Lamps.category = Pendant;
    }
    if (text === "직접 조명" && Lamps.category !== Pendant + 5) {
      Lamps.category = Pendant + 5;
    } else if (Lamps.category === Pendant + 5) {
      Lamps.category = Pendant;
    }
    
    onClickLamp(); // 비뀐 값으로 다시 요청
  };

  // light 이미지를 바꾸기 위해 className을 바꿔주는 함수
  useEffect(() => {
    product.current.parentElement.firstChild.firstChild.firstChild.className = `light ${lampName}`;
    product.current.parentElement.firstChild.firstChild.firstChild.firstChild.className = `light ${lightMethod}`;
  }, [lampName, lightMethod]);
  
  // 상품 데이터 요청
  async function onClickLamp() {
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
          setLoading(false) // 로딩이 끝남을 의미
          setData(res.data); //데이터 저장
        } else {
          alert(res.msg);
        }
      } else {
        setLoading(true) // 로딩이 지속됨을 의미
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      setLoading(true) // 로딩이 지속됨을 의미
      console.error(Error('불러오는 중 에러 발생'));
    }
  };

  useEffect(() => {
    // 요청 범주가 유효할때만 실행
    if (Lamps.category >= 10) {
      onClickLamp();
    }
  },[Lamps])

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
    
      {loading === false ? 
        <Items 
          path={lampName}
          data={data}
          where={"P"}
        /> :
        <div className="products-loading">loading...</div>
      }
    </div>
  );
}

export default Products;

/*
CARTEGORY_FK:14
IMG_DATA:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAA
PRICE:50000
PRODUCT_PK:30


IMG_DATA:"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcIBwgJCQgMD
PRODUCT_FK:7
*/