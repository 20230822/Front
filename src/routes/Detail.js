import "../style/Detail.css";

function Detail() {
  return (
    <div className="detail">  
      <div className="detail-header">
        <img className="detail-left" src="../images/banner1.jpeg" alt="제품 사진" />
        
        <div className="detail-right">
          <h1 className="detail-right-title">product Name</h1>
          <div className="detail-right-description">
            <div className="detail-price">가격</div>
            <div className="detail-color">색상</div>
          </div>
        </div>
      </div>
      
      <div className="detail-content">
        <p>설명</p>
      </div>
    </div>
  );
}

export default Detail;