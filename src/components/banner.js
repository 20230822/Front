// 기존에 쓰던 querySelector은 dom을 참조 react는 가상돔이라 사용을 자제해야 한다. 
// 대신 사용하는 것이 useRef란 것 사용시 {변수명.current}
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/banner.css"

function Banner() {
  const [index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(1);
  const [toggle, setToggle] =useState(true);
  // document.querySelector과 같은 기능 {변수명.current로 사용해야함}
  const carousel = useRef(null);
  const item = useRef(null);
  const [active, setActive] = useState("");
  const TIME = 300;

  // 불러온 데이터 바로 저장 변수
  const [lights, setLights] = useState([
    {
      IMG_DATA: "",
      PRODUCT_PK: "",
      PRODUCT_NM: "",
    },
    {
      IMG_DATA: "",
      PRODUCT_PK: "",
      PRODUCT_NM: "",
    },
    {
      IMG_DATA: "",
      PRODUCT_PK: "",
      PRODUCT_NM: "",
    },
  ]);
  // 이미지만 따로 모은 변수
  const [img, setImg] =useState("");

  // api 연결 부분
  useEffect(() => {
    async function getRandomData() {
      try{
        const response = await fetch('/api/main', {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(), 
        });
    
        // 연결 성공 유무 판단
        if (response.ok) {
          const res = await response.json();
          if (res.success) {
            setLights(res.data);
          } else {
            alert(res.msg);
          }
        } else {
          throw Error("서버 응답 실패");
        }
      } catch(err) {
        console.error(Error('불러오는 중 에러 발생'));
      }
    };

    getRandomData();
  }, []);

  //이미지 디코딩 함수
  useEffect(() => {
    // async 비동기 함수로 선언하는데 사용 내부에서 await을 사용하여 비동기 작업 수행 (항상 promise를 반환한다.)
    const decodeImages = async () => {
      if (lights[0].IMG_DATA !== "") {
        // await async 함수 안에서만 동작하며, promise가 처리 될때까지 기다린다. 
        // 사용자경험을 향상시키기 위해 사용(응답성 향상, 성능개선)
        // promise는 비동기 작업을 다룰 때 사용되는 객체로 resolve(성공), reject(거절) 두가지 콜백을 받고 all을 사용하여 여러 배열을 병렬로 처리시 사용
        const changeData = await Promise.all(lights.map((getImg) => {
          const base64Data = `data:image/jpeg;base64,${getImg.IMG_DATA}`;
          getImg = base64Data;
          return getImg;
        }));
        setImg(changeData);
      }
    };
    
    decodeImages();
  }, [lights]);

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
    if(img !== "") {
      const itemWidth = item.current.clientWidth + 10;
      dotColor(index);
      carousel.current.style.transform = "translateX(" + (index * itemWidth) + "px)"; 
    }
  }, [index, img]);

  // 자동 슬라이드 기능을 구현
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        // 맨 끝 index에 도달시 move클래스 추가와 위치 변경 조건문
        if (prevIndex === lights.length - 2) {
          setTimeout(() => {
            setActive("move");
            setIndex(-1);
          }, TIME); 
        } 
        setActive(""); 
        return prevIndex + 1;
      });
    }, 3000);

    // mouseEnter시 인터벌 제거
    if (toggle === false) {
      clearInterval(intervalId);
    };
    // 컴포넌트가 언마운트될 때 clearInterval로 인터벌 제거
    return () => {
      clearInterval(intervalId);
    };
  }, [lights.length, toggle]);

  // mouseover시 toggle의 값과 반대로 저장하여 slide 재생 유무전달
  const onToggle = () => {
    setToggle((prev) => prev === false ? true : false);
  };

  const navigate = useNavigate();

  const handleImageClick = () => {
    // 이미지를 클릭했을 때 페이지 이동
    // link 사용 시 transition이 적용되지 않아 useNavigate로 대체
    navigate(`/Products/제품/상세페이지`, {
      state: { id: lights[dotIndex].PRODUCT_PK, img: img[dotIndex] },
    });
  };

  return (
    <div className="banner">
      <div className="banner-header" onMouseEnter={onToggle} onMouseLeave={onToggle}> {/* mouseover와는 다르게 자식은 해당안되고 오로지 자기 자신만 해당 */}
        <div className="banner-container">
          {lights.h2 !== "" && 
          <div className="banner-title">
            <h2 className="banner-title-header">{lights[dotIndex].PRODUCT_NM}</h2>
          </div>}

          {img !== "" && 
          <div className={`banner-images ${active === "move" ? active : ""}`} ref={carousel} onClick={handleImageClick}>
            <img className="banner-images-index clone" src={img[2]} alt="조명 사진" />
            <img className="banner-images-index" src={img[0]} alt="조명 사진" />
            <img className="banner-images-index" src={img[1]} alt="조명 사진" />
            <img className="banner-images-index" src={img[2]} alt="조명 사진" />
            <img className="banner-images-index clone" src={img[0]} alt="조명 사진" ref={item}/>
          </div>}

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