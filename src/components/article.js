import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/article.css";

function Article(props) {
  const [index, setIndex] = useState(0);
  const carousel = useRef(null);
  const item = useRef(null);
  // props로 전달받은 저장 변수
  const [hashData, setHashData] = useState(props.state.hash);
  const [results, setResults] = useState(""); // 불러온 데이터 저장
  const [hashOfItem, setHashOfItem] = useState("");

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
    // 데이터가 있을때만 계산
    if (hashOfItem !== "") {
      const itemWidth = item.current.clientWidth + 10;
      carousel.current.style.transform =  "translateX(" + (index * itemWidth) + "px)"; 
    }
  }, [index]);

  // hashtag에 검색한 값이 포함되어있는지 확인하는 함수
  useEffect(() => {
    if (results !== ""){
      results.map((result, index) => {
        const check = result.HASHTAG.includes(props.state.title);
        // hash의 유무확인 후 있으면 값에 저장
        if (check) {
          setHashOfItem((pre) => [...pre, result]);
        };
      })
    }
  }, [results, props.state.title])

  // api 연결 부분
  useEffect(() => {
    async function getHashData() {
      try{
        const response = await fetch('/api/main/hashtag', {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(hashData) 
        });

        // 연결 성공 유무 판단
        if (response.ok) {
          const res = await response.json();
          if (res.success) {
            setResults(res.data);
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

    getHashData();
  }, [hashData]);

  const navigate = useNavigate();
  // hash관련 상세제품으로 이동시켜주는 함수
  const handleItem = (item) => {
    const itemImg = `data:image/jpeg;base64,${item.IMG_DATA}`;
    navigate(`/Products/제품/상세페이지`, {
      state: { id: item.PRODUCT_PK, img: itemImg },
    });
  };

  return (
    <div className="article">
      <h2 className="article-title">{props.state.title}</h2>

      <div className="article-image">
        <span className="article-pre" onClick={onSlide}></span>
        <span className="article-next" onClick={onSlide}></span>

        <div className="article-recommend" ref={carousel}>
          {hashOfItem !== "" &&
            hashOfItem.map((hashItem, index) => (
              <img key={index} className="article-recommend-items" src={`data:image/jpeg;base64,${hashItem.IMG_DATA}`} alt="상황별 조명 추천 사진" ref={item} onClick={() => handleItem(hashItem)}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Article;