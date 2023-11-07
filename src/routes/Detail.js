import { useEffect, useState } from "react";
import "../style/Detail.css";
import { useLocation } from "react-router";

function Detail() {
  // 요청해서 받아온 데이터 저장 변수
  const [detailData, setDetailData] = useState({
    name: "",
    price: "",
    size: "",
    material: "",
    weight: "",
    type: "",
    made: "",
    hash: "",
    text: "",
    img: [],
  })
  const [img, setImg] = useState("");
  const detailColors = ["상품색", "전구온도"];
  // 데이터 불러올떄 사용할 제품 아이디 값 변수
  const [product, setProduct] = useState({id: ""}); 
  // state로 전달받을 변수들
  const location = useLocation();
  const productId = location.state.id;
  const productImg = location.state.img;

  // 전달받은 인자들 요청위해 id값 넣어주기
  useEffect(() => {
    setProduct({id: productId});
  }, [productId]);

  // 처음한번만 데이터 받아오기
  useEffect(() => {
    async function getItemData() {
      if (product.id !== "") {
        try{
          const response = await fetch('https://port-0-node-express-jvvy2blmegkftc.sel5.cloudtype.app/api/product/detailInfo', {
            credentials: 'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          });

          // 연결 성공 유무 판단
          if (response.ok) {
            const res = await response.json();
            if (res.success) {
              // 데이터 저장
              setDetailData({
                name: res.data.PRODUCT_NM,
                price: res.data.PRICE,
                size:res.data.SIZE,
                material: res.data.MATERIAL,
                weight: res.data.WEIGHT,
                type: res.data.LIGHT_TYPE,
                made: res.data.COUNTRY,
                hash: res.data.HASHTAG,
                text: res.data.DESCRIBE,
                img: res.dataImages,
              });
            } else {
              alert(res.msg);
            }
          } else {
            throw Error("서버 응답 실패");
          }
        } catch (err) {
          console.error(Error('상품데이터 불러오는 중 오류'));
        }
    }};

    getItemData();
  }, [product]);

// base64를 주소이미지로 변환과정
useEffect(() => {
  const decodeImage = async () => {
    if (detailData.img !== undefined) {
      const changeData = await Promise.all(detailData.img.map((getImg) => {
        const base64Data = `data:image/jpeg;base64,${getImg.data}`;
        getImg = base64Data;
        return getImg;
      }));
      setImg(changeData);
    }
  }
  
  decodeImage();
}, [detailData]);

return (
    <div className="detail">  
      <div className="detail-header">
        <img className="detail-left" src={productImg} alt="제품 사진" />
        
        <div className="detail-right">
          <h1 className="detail-right-title">{detailData.name}</h1>
          <div className="detail-right-description">
            {detailData.size && <div className="detail-type">사이즈: {detailData.size}</div>}
            {detailData.material &&  <div className="detail-type">재질: {detailData.material}</div>}
            {detailData.weight && <div className="detail-type">무게: {detailData.weight}</div>}
            {detailData.type && <div className="detail-type">전구타입: {detailData.type}</div>}
            {detailData.made && <div className="detail-type">제조나라: {detailData.made}</div>}
            {detailData.hash && <div className="detail-type">{detailData.hash}</div>}
            {detailData.text && <div className="detail-type">{detailData.text}</div>}
            {detailColors.map((color, index) => {
              return(
                <div className="detail-color" key={index}>
                  <h3 className="detail-color-title">{color}</h3>
                  <div className="detail-color-boxes">
                    <span className="detail-color-box"></span>
                    <span className="detail-color-box"></span>
                    <span className="detail-color-box"></span>
                  </div>
                </div>
              )
            })}
            <div className="detail-price">{detailData.price} 원</div>
          </div>
        </div>
      </div>
      
      <div className="detail-content">
        <p className="detail-content-text">{detailData.text}</p>
        <div className="detail-content-space">
          {img !== undefined && <img className="detail-content-space-picture" src={img[1]} alt="연출사진 1" />}
          <img className="detail-content-space-picture" src="/" alt="연출사진 1" />
        </div>
      </div>
    </div>
  );
}

export default Detail;