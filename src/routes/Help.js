import React from "react";
import "../style/Help.css";
import { Link } from "react-router-dom";

function Help() {
  const posts = [
    { id: 1, uid : 1, title: '첫 번째 게시물', content: '안녕하세요, 첫 번째 게시물입니다.', date: Date()},
    { id: 2, uid : 2, title: '두 번째 게시물', content: '두 번째 게시물 내용입니다.', date: Date() },
    // ...
  ];
  //수정필요

  return (
    <div className="Help">
      <h2>고객센터</h2>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/Help/${post.id}`}>{post.title}</Link>
                </td>
              <td>{new Date(post.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Help;