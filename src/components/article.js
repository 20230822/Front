import { useEffect, useRef, useState } from "react";
import "../style/article.css";

function Article() {
  const [index, setIndex] = useState(0);
  const carousel = useRef(null);
  const item = useRef(null);

  //몇번 이동해야하는지 알려주는 함수
  const onSlide = (e) => {
    const direction = e.target.className;
    // 슬라이드의 자식 개수
    const children = carousel.current.children.length;
    // 5개만 보여지고 나머지는 클릭 가능횟수와 같으므로 -5
    const clickTime = children - 5;

    // 누른 방향에 따라서 index값 변화
    setIndex(direction === "article-pre" ? (index !== 0 ? (index) => index + 1 : 0) : (index !== -clickTime ? (index) => index - 1 : -clickTime));
  };

  // index값 변경마다 slide 움직이게 하는 화살표함수
  useEffect(() => {
    const itemWidth = item.current.clientWidth + 10;
    carousel.current.style.transform =  "translateX(" + (index * itemWidth) + "px)"; 
  }, [index]);

  return (
    <div className="article">
      <h2 className="article-title">조용한 분위기</h2>

      <div className="article-image">
        <div className="article-arrow">
          <span className="article-pre" onClick={onSlide}></span>
          <span className="article-next" onClick={onSlide}></span>
        </div>

        <div className="article-recommend" ref={carousel}>
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" ref={item}/>
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
        </div>
      </div>
    </div>
  );
}

export default Article;