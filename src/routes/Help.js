import React, { useState, useEffect } from "react";
import "../style/Help.css";
import { Link } from "react-router-dom";
import * as gvar from "../globalVar.js"

function Help() {
  const [posts, setPosts] = useState([
    {
      NOTICE_PK: "",
      TITLE: "",
      WRITE_DT: "",
      USER_NM: '',
    },
  ]);

  async function apiNotice() {
    // 정보 전달 함수
    try {
      const response = await fetch(gvar.REACT_APP_URL + '/api/notice', {
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
          setPosts(res.data);
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
    <div className="Help">
      <h2>공지사항</h2>
      <table>
        <thead>
          <tr>
            <th className="num">글번호</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.NOTICE_PK}>
              <td className="postID">{post.NOTICE_PK}</td>
              <td>
                <Link to={`/Help/${post.NOTICE_PK}`}>{post.TITLE}</Link>
              </td>
              <td>{new Date(post.WRITE_DT).toLocaleString()}</td>
              <td>{post.USER_NM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Help;