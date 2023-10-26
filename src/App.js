//npm install react-router-dom 설치 후 사용 가능
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import { lazy, Suspense, useEffect } from "react";
import "./style/App.css";
import Header from "./routes/Header.js";
import * as gvar from "./globalVar";


//lazy = 처음 렌더링까지 지연 즉, 필요할 때만 호출하겠다는 의미 불필요한 로드 방지
//이 경우 아직 load되지 않았을 때 보여주는 창이 필요 {참고 https://react.dev/reference/react/lazy}
const Home = lazy(() => import("./routes/Home.js"));
const Login = lazy(() => import("./routes/Login.js"));
const Help = lazy(() => import("./routes/Help.js"));
const MyPage = lazy(() => import("./routes/MyPage"));
const Products = lazy(() => import("./routes/Products.js"));
const Detail = lazy(() => import("./routes/Detail.js"));
const HelpDetail = lazy(() => import("./routes/HelpDetail.js"));

function App() {
  const pages = [
    {
      pageLink: "/",
      view: Home,
    },
    {
      pageLink: "/Login",
      view: Login,
    },
    {
      pageLink: "/Help",
      view: Help,
    },
    {
      pageLink: "/MyPage",
      view: MyPage,
    },
    {
      pageLink: "/Products/:ProductId",
      view: Products,
    },
    {
      pageLink: "/Products/:ProductId/:Detail",
      view: Detail,
    },
    {
      pageLink: "/Help/:id",
      view: HelpDetail,
    },
  ];

  useEffect(()=> {
    console.log("ji");
  }, []);

  useEffect(() => {
    async function Islogin(){
    try {
      const response = await fetch(gvar.REACT_APP_URL+'/login/success', {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
        },
        withCredentials: true,
      });
      if (response.ok) {
        const res = await response.json();

        if(!res.success) {
          alert(res.msg);
        }
      } else {
        throw Error("서버 응답 실패");
      }
    } catch(err) {
      console.error(Error('로그인 중 에러 발생'));
    }
  }
  Islogin();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Reset />
        <Header />

        <Suspense fallback={<div />}> {/* loading완료 전까지 보여줄 화면 fallback */}
            <Routes>
              {/* 화살표홤수 다음에 중괄호 존재시 return을 명시적으로 작성해주어야 함. */}
              {/* map 사용 시 하위 요소들은 필수적으로 key값이 필요 */}
              {pages.map((pages, index) => {
                return (
                  <Route 
                    path={pages.pageLink} 
                    element={<pages.view />} 
                    key={index}
                  />
                );
              })}
              </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
