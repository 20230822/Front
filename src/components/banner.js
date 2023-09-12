// 기존에 쓰던 querySelector은 dom을 참조 react는 가상돔이라 사용을 자제해야 한다. 
// 대신 사용하는 것이 useRef란 것 사용시 {변수명.current}
import { useEffect, useRef, useState } from "react";
import "../style/banner.css"
import image1 from "../images/banner1.jpeg";
import image2 from "../images/banner2.jpeg";
import image3 from "../images/banner3.jpeg";

function Banner() {
  const [index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(1);
  // document.querySelector과 같은 기능 {변수명.current로 사용해야함}
  const carousel = useRef(null);
  const item = useRef(null);
  const [active, setActive] = useState("");
  const TIME = 300;
  const lights = [
    {
      h2: "lamp1",
      p: "this is the lamp1",
    },
    {
      h2: "lamp2",
      p: "this is the lamp2",
    },
    {
      h2: "lamp3",
      p: "this is the lamp3",
    },
  ];

  // slide 눈속임을 이용한 함수 젤끝까지 이동하면 몇초뒤 transition을 없애고 처음으로 이동
  const onSlide = (e) => {
    // 누른 방향에 따라서 index값 변화
    const direction = e.target.className;
    setIndex(direction === "banner-pre" ? (index) => index + 1 : (index) => index - 1);
    
    // 왼쪽으로 가다 끝을 만나면 맨 오른쪽으로 이동
    if (index === 1) {
      if (direction === "banner-pre")
        setTimeout(() => {
          setIndex(-1);
          setActive("move");
        }, TIME);   
    } else if (index !== 1)
        setActive("");
    // 오른쪽으로 가다 끝을 만나면 맨 왼쪽으로 이동
    if (index === -1) {
      if (direction === "banner-next")
        setTimeout(() => {
          setIndex(1);
          setActive("move");
        }, TIME);   
    } else if (index !== -1)
        setActive("");
  };

  // dot을 누르면 그 id값을 가져와 index에 넣어준다.
  const onDotCLick = (e) => {
    let value = 0;

    // id의 값이 숫자가 아니라서 == 두개만 사용
    if (e.target.id === "0")
      value = 1;
    else if (e.target.id === "1")
      value = 0;
    else if (e.target.id === "2")
      value = -1;
    
    setIndex(value);
    // 화살표클릭과 겹칠 시 오류를 해결하기 위해 class초기화 하기
    setActive(""); 
  };

  // index에 맞게 dot의 값을 바꾸어 전달하여 클래스를 생성할 수 있게하는 함수
  const dotColor = (index) => {
    let value = 0;

    if (index === 0)
      value = 1;
    else if (index === 1)
      value = 0;
    else if (index === -1 || index === 2)
      value = 2; 
    setDotIndex(value);
  };

   // index값 변경마다 slide 움직이게 하는 화살표함수
   useEffect(() => {
    const itemWidth = item.current.clientWidth + 10;

    dotColor(index);
    carousel.current.style.transform =  "translateX(" + (index * itemWidth) + "px)"; 
  }, [index]);

  //자동으로 slide하는 함수(방법을 못 찾음)
  // setTimeout(() => {
  //   const itemWidth = item.current.clientWidth + 10;
  //   setIndex((index) => index + 1);
  //   carousel.current.style.transform =  "translateX(" + (index * itemWidth) + "px)"; 
  // }, 1000);

  return (
    <div className="banner">
      <div className="banner-header">
        <div className="banner-title"> {/* class만들어 놓고 map사용하여 index에 맞게 불러오는 형식 사용하기 */}
          {lights.map((lights, index) => {
            return (
              <div className="text" key={index}>
                <h2 className="banner-title-header">{lights.h2}</h2>
                <p>{lights.p}</p>
              </div>
            );
          })}
        </div>

        <div className={`banner-images ${active === "move" ? active : ""}`} ref={carousel}>
          <img className="banner-images-index clone" src={image3} alt="조명 사진" />
          <img className="banner-images-index" src={image1} alt="조명 사진" ref={item}/>
          <img className="banner-images-index" src={image2} alt="조명 사진" />
          <img className="banner-images-index" src={image3} alt="조명 사진" />
          <img className="banner-images-index clone" src={image1} alt="조명 사진" ref={item}/>
        </div>  
        
        <div className="banner-arrow">
          <span className="banner-pre" onClick={onSlide}></span>
          <span className="banner-next" onClick={onSlide}></span>
        </div>    
      </div>

      <div className="banner-dot">
        <span id="0" className={`banner-dot-index ${dotIndex === 0 ? "current" : ""}`} onClick={onDotCLick}></span>
        <span id="1" className={`banner-dot-index ${dotIndex === 1 ? "current" : ""}`} onClick={onDotCLick}></span>
        <span id="2" className={`banner-dot-index ${dotIndex === 2 ? "current" : ""}`} onClick={onDotCLick}></span>
      </div>
    </div>
  );
}

export default Banner;