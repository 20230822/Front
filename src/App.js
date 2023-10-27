//npm install react-router-dom 설치 후 사용 가능
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm i styled-reset설치 후 사용
import { Reset } from "styled-reset";
import { lazy, Suspense } from "react";
import "./style/App.css";
import Header from "./routes/Header.js";



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
  const islogin = "ffff";
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

  return (
    <BrowserRouter>
      <div className="App">
        <Reset />
        <Header />

        <Suspense fallback={<div />}> {/* loading완료 전까지 보여줄 화면 fallback */}
            <Routes>
              {/* 화살표홤수 다음에 중괄호 존재시 return을 명시적으로 작성해주어야 함. */}
              {/* map 사용 시 하위 요소들은 필수적으로 key값이 필요 */}
              {pages.map((page, index) => {
                return (
                  <Route 
                    path={page.pageLink} 
                    element={<page.view islogin={islogin}/>} 
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
