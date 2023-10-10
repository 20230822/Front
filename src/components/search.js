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
      <form action="#" method="get" className={formClass} onClick={(e) => e.stopPropagation()}>
        <input type="text" className="search-box" onClick={(e) => e.stopPropagation()} />
        <input type="submit" className="search icon" onClick={(e) => e.preventDefault()} />
      </form>
    </div>
  );
}

export default Search;
