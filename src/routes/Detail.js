import { useEffect, useState } from "react";
import "../style/Detail.css";
import { useLocation } from "react-router";


function Detail() {
  const details = ["사이즈", "재질", "무게", "전구타입", "원산지", "해시태그", "설명"];
  const detailColors = ["전구온도", "상품색"];

  const [productName, setProductName] = useState(""); 
  // 연결할 때 사용할 변수
  const [productPrice, setProductPrice] = useState(""); 

  // link로 이동한거기 때문에 location을 받으면 인자를 받을 수 있다.
  const location = useLocation();
  const name = location.state;

  useEffect(() => {
    setProductName(name);
  }, [name]);

  return (
    <div className="detail">  
      <div className="detail-header">
        <img className="detail-left" src="../images/banner1.jpeg" alt="제품 사진" />
        
        <div className="detail-right">
          <h1 className="detail-right-title">{productName}</h1>
          <div className="detail-right-description">
            {details.map((detail, index) => {
              return(
                <div className="detail-type" key={index}>{detail}</div>
              )
            })}
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
            <div className="detail-price">{productPrice}</div>
          </div>
        </div>
      </div>
      
      <div className="detail-content">
        <p className="detail-content-text">이 제품은 무슨무슨 조명으로 뭐뭐 하는데 사용한다. 만들었다. 연출한다.</p>
        <div className="detail-content-space">
          <img className="detail-content-space-picture" src="/" alt="연출사진 1" />
          <img className="detail-content-space-picture" src="/" alt="연출사진 1" />
        </div>
      </div>
    </div>
  );
}

export default Detail;