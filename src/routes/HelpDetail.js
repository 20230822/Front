import React,{useEffect, useState}from "react";
import { useParams} from "react-router-dom";
import "../style/HelpDetail.css";
import * as gvar from "../globalVar.js"

const HelpDetail = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState([
    {
      CONTENT: "",
      TITLE: "",
      WRITE_DT: "",
      USER_NM: '',
    },
  ]);

  async function apiNotice() {
    // 정보 전달 함수
    console.log("여기" + id);
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/notice/detail?page=' + id, {
        credentials: 'include',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "",
        },
        body: JSON.stringify(posts),
      });
      if (response.ok) {
        const res = await response.json();
        if (res.success) {
          setPosts(res.data[0]);
        } else {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
    } catch (err) {
      console.error(Error('로그인 중 에러 발생'));
    }
  };

  useEffect(() => {
    apiNotice();
  }, [])

  return (
    <div className="HelpDetail">
      <h2>게시물 상세 페이지</h2>
      <div className="post-details">
        <div className="post-detail">
          <h3>제목: {posts.TITLE}</h3>
        </div>
        <div className="post-detail">
          <p>작성일: {new Date(posts.WRITE_DT).toLocaleString()}</p>
        </div>
      </div>
      <div className="post-content">
        <p>내용: {posts.CONTENT}</p>
      </div>
    </div>
  );
};

export default HelpDetail;