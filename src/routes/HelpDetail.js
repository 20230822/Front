import React from "react";
import { useParams } from "react-router-dom";
import "../style/HelpDetail.css";

const HelpDetail = () => {
  // match.params를 사용하여 선택된 게시물 ID를 가져옵니다.
  const { id } = useParams();

  // 실제 게시물 데이터를 가져오는 로직을 구현해야 합니다.
  // 여기서는 간단한 예제로 고정된 데이터를 사용합니다.
  const post = {
    id: id,
    uid: 1,
    title: `게시물 ${id}`,
    content: `이것은 게시물 ${id}의 내용입니다.`,
    date: new Date().toLocaleString(),
  };

  return (
    <div className="HelpDetail">
      <h2>게시물 상세 페이지</h2>
      <h3>제목: {post.title}</h3>
      <p>작성일: {post.date}</p>
      <p>내용: {post.content}</p>
    </div>
  );
};

export default HelpDetail;