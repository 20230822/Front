import "../style/banner.css"
import image1 from "../images/banner1.jpeg";
import image2 from "../images/banner2.jpeg";
import image3 from "../images/banner3.jpeg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-header">
        <div className="title">
          <h2 className="title-header">lamp</h2>
          <p className="title-description">this is good lamp</p>
        </div>
        
        <div className="images">
          <img className="images-index" src={image1} alt="조명 사진" />
          <img className="images-index" src={image2} alt="조명 사진" />
          <img className="images-index" src={image3} alt="조명 사진" />
        </div>
        
        <div className="arrow">
          <span className="pre"></span>
          <span className="next"></span>
        </div>
      </div>

      <div className="banner-dot">
        <span className="banner-dot-index"></span>
        <span className="banner-dot-index"></span>
        <span className="banner-dot-index"></span>
      </div>
    </div>
  );
}

export default Banner;