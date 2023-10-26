import React, { useState } from "react";
import "../style/search.css";

function Search() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [search, setSearch] = useState("");

  // 폼이 보이는 경우에만 CSS 클래스 추가
  const formClass = isFormVisible ? "show" : "none";

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // 검색창에 입력시 마다 변수 내용 바뀌기
  const handleInputChangeSearch = (e) => {
    const value = e.target;
    setSearch({...search, value});
  };

  return (
    <div className="search icon" onClick={toggleFormVisibility}>
      <form action="#" method="get" className={formClass} onClick={(e) => e.stopPropagation()}>
        <input 
          type="text" 
          className="search-box" 
          value={search}
          onClick={(e) => e.stopPropagation()} 
          onChange={handleInputChangeSearch}
          />
        <input type="submit" className="search icon" onClick={(e) => e.preventDefault()} />
      </form>
    </div>
  );
}

export default Search;
