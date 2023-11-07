import { Link } from "react-router-dom";
import "../style/item.css";
import { useEffect, useState } from "react";

// 웬만하면 기존 불러온 데이터는 따로 두고 업데이트에 필요한 데이터를 새로 만들어서 사용하기(그래야 오류가 적음..)
function Items( props ) {
  // 불러온 데이터를 배열형태로 저장할 변수
  const [light, setLight] = useState([
    {
      CARTEGORY_FK: "",
      IMG_DATA: "",
      PRICE: "",
      PRODUCT_PK: "",
    },
  ]);
  // 새로 업데이트된 상태 변수
  const [decodedLight, setDecodedLight] = useState([]);
  // 현재 조명종류 공백제거하고 주소창에 넣기 위한 변수
  const lightType = props.path.replace(/\s/g, "");

  // 전달 받은데이터 저장
  useEffect(() => {
    setLight(props.data.products);
  }, [props]);
  
  //이미지 디코딩 함수
  useEffect(() => {
    // async 비동기 함수로 선언하는데 사용 내부에서 await을 사용하여 비동기 작업 수행 (항상 promise를 반환한다.)
    const decodeImages = async () => {
      if (light !== undefined) {
        // await async 함수 안에서만 동작하며, promise가 처리 될때까지 기다린다. 
        // 사용자경험을 향상시키기 위해 사용(응답성 향상, 성능개선)
        // promise는 비동기 작업을 다룰 때 사용되는 객체로 resolve(성공), reject(거절) 두가지 콜백을 받고 all을 사용하여 여러 배열을 병렬로 처리시 사용
        const decodedLight = await Promise.all(light.map((lightItem) => {
          const base64Data = `data:image/jpeg;base64,${lightItem.IMG_DATA}`;
          lightItem.IMG_DATA = base64Data;
          return lightItem;
        }));

        setDecodedLight(decodedLight); // 이런식으로 다른 곳에 저장을 새로 해줘야 무한루프, 비동기 방식에 의한 오류가 생기지 않는다.
      }
    };
      decodeImages();
  }, [light]);

  return (
    <div className="products-items">
      {decodedLight !== undefined &&
        decodedLight.map((decodedLights, index) => (
          <Link className="item-box" to={`/Products/${lightType}/상세페이지`} key={index} state={ {id: decodedLights.PRODUCT_PK, img: decodedLights.IMG_DATA}}>
            <img className="item-box-img" src={decodedLights.IMG_DATA} alt="조명사진" />
          </Link>
    ))}
    </div>
  );
}

export default Items;