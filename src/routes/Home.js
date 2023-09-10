import "../style/Home.css";
import Banner from "../components/banner";
import Article from "../components/article";

function Home() {
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