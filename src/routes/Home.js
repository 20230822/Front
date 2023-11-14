import "../style/Home.css";
import Banner from "../components/banner";
import Article from "../components/article";
import { useEffect, useState } from "react";

function Home( props ) {
  const [islogin,setIslogin] = useState("")
  // 데이터를 요청하기위한 변수
  const [hash, setHash] = useState(
    {
      hashtag1: "아담",
      hashtag2: "시크",
      hashtag3: "팬던트"
    }, 
  );

  useEffect(()=>{
    if(props) {
      setIslogin(props);
    }
  },[props])
  
  return (
    <div className="home">
      <Banner />

      <section className="home-article">
        <Article state={ {hash: hash, title: hash.hashtag1} }/>
        <Article state={ {hash: hash, title: hash.hashtag2} }/>
        <Article state={ {hash: hash, title: hash.hashtag3} }/>
      </section>
    </div>
  );
}

export default Home;