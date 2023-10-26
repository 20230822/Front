//a태그는 전체 새로고침이기에 link를 사용하여 특정 부분만 불러오기
import { Link } from "react-router-dom";
import "../style/item.css";
import { useEffect, useState } from "react";

function Items( props ) {
  // 불러온 데이터를 배열형태로 저장할 변수
  const [light, setLight] = useState([
    {
      CARTEGORY_FK: "",
      IMG_DATA: "",
      PRICE: "",
      PRODUCT_PK: "",
    }
  ]);
  // 데이터 사진저장 함수
  const [dataImg, setDataImg] = useState("");
  // 사진불러오기 위한 주소 변수
  const [decodedImageData, setDecodedImageData] = useState([]);

  //decoding 함수
  function decoding(pData) {
    const base64Data = new ArrayBuffer(pData.IMG_DATA.data,'base64');
    setDecodedImageData(`data:image/jpeg;base64,${base64Data}`);
  };

  useEffect(() => {
    setLight(props.data);
  }, [props]);

  useEffect(() => {
    // if(light !== "")
    //   (light.map((light, index) => {return(
    //     decoding(light)
    //     )}))
    console.log(light);
  }, [light]);

  return (
    <div className="products-items">
      {light !== "" && light.map((light, index) => (
      <Link className="item-box" to={`/Products/ji/ㅗㅑ`} key={index} state={""}>
        <h1>{light.PRODUCT_PK}</h1>
        <p>goo</p>
        <img src="" alt="" />
      </Link>
    ))}
    </div>
  );
}

export default Items;