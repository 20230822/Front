import "../style/Home.css";
import Banner from "../components/banner";
import Article from "../components/article";
import { useEffect, useState } from "react";

function Home( props ) {
  const [islogin,setIslogin] = useState("")

  useEffect(()=>{
    if(props)
    {
      setIslogin(props);
    }
  },[props])

  useEffect(()=>{
    console.dir(islogin);
  },[islogin])
  
  return (
    <div className="home">
      <Banner />

      <section className="home-article">
        <Article />
        <Article />
        <Article />
      </section>
    </div>
  );
}

export default Home;