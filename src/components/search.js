import React, { useState } from "react";
import "../style/search.css";

function Search() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // 폼이 보이는 경우에만 CSS 클래스 추가
  const formClass = isFormVisible ? "show" : "none";

  return (
    <div className="search icon" onClick={toggleFormVisibility}>
      search
      <form action="#" method="get" className={formClass} onClick={(e) => e.stopPropagation()}>
        <input type="text" onClick={(e) => e.stopPropagation()} />
        <input type="submit" value={"검색"} className="search icon" onClick={(e) => e.stopPropagation()} />
      </form>
    </div>
  );
}

export default Search;
