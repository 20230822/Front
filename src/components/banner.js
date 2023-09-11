import "../style/banner.css"
import image1 from "../images/banner1.jpeg";
import image2 from "../images/banner2.jpeg";
import image3 from "../images/banner3.jpeg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-header">
        <div className="banner-title">
          <h2 className="banner-title-header">lamp</h2>
          <p className="banner-title-description">this is good lamp</p>
        </div>

        <div className="banner-images">
          <img className="banner-images-index" src={image1} alt="조명 사진" />
          <img className="banner-images-index" src={image2} alt="조명 사진" />
          <img className="banner-images-index" src={image3} alt="조명 사진" />
        </div>
        
        <div className="banner-arrow">
          <span className="banner-pre"></span>
          <span className="banner-next"></span>
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