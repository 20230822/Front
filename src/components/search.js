import React, { useEffect, useState } from "react";
import "../style/search.css";

function Search() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [search, setSearch] = useState(""); // 검색한 값 저장 변수
  const [result, setResult] = useState([]); // 검색한 데이터들의 저장 변수
  const [check, setCheck] = useState(false);

  // 폼이 보이는 경우에만 CSS 클래스 추가
  const formClass = isFormVisible ? "show" : "none";

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // 검색창에 입력시 마다 변수 내용 바뀌기
  function handleInputChangeSearch(e) {
    const value = e.target.value;
    setSearch(value);
  };

  // 검색 요청
  async function onSearch(e) {
    e.preventDefault(); // 새로고침되서 맨위로 올라가는 현상 방지

    try {
      const response = await fetch(`https://port-0-node-express-jvvy2blmegkftc.sel5.cloudtype.app/api/product/search?keyword=${search}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      // 연결 성공 유무 판단
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setResult(res.data);
          setCheck(true);
          if (res.data[0] === undefined)
            setCheck(false);
        } else {
          alert(res.msg);
        }
      } else {
        setCheck(false);
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      setCheck(false);
      console.error(Error('불러오는 중 에러 발생'));
    }
  };

  return (
    <div className="search icon" onClick={toggleFormVisibility}>
      <form action="#" method="get" className={formClass} onClick={(e) => e.stopPropagation()}>
        <input 
          type="text" 
          className="search-box" 
          value={search}
          onChange={handleInputChangeSearch}
          />
        <input type="submit" className="search icon" onClick={onSearch} />
      </form>

      {check === false ? "" : 
        <div className={`search-result-${formClass}`} onClick={(e) => e.stopPropagation()}>
          {result.map((resultData, index) => {
            return(
              <article className={`search-result-item-${formClass}`} key={index}>
                <h2 className="item-name">{resultData.PRODUCT_PK}sdf</h2>
                <p className="item-description">{resultData.COLOR}</p>
              </article>
            )
          })}
        </div>
      }
    </div>
  );
}

export default Search;
