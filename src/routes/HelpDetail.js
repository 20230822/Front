import React from "react";
import { useParams } from "react-router-dom";
import "../style/HelpDetail.css";

const HelpDetail = () => {
  const { id } = useParams();

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