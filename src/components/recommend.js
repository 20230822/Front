import Items from "./items";
import "../style/recommend.css"

function Interest() {
  return (
    <div className="interest">
      <div className = "nemo"></div>
      <div className = "recommend">추천상품</div>
      <Items />
    </div>
  );
}

export default Interest;
