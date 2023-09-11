import "../style/article.css";

function Article() {
  return (
    <div className="article">
      <h2 className="article-title">조용한 분위기</h2>

      <div className="article-image">
        <div>
          <span className="article-pre"></span>
          <span className="article-next"></span>
        </div>

        <div className="article-recommend">
          <img className="article-recommend-items" src="" alt="상황별 조명 추천 사진" />
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