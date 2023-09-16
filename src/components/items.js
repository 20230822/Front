import "../style/item.css";

function Items() {
  const lights = [
    {
      title: "first",
      description: "good",
    },
    {
      title: "second",
      description: "bad",
    },
    {
      title: "third",
      description: "bad",
    },
    {
      title: "fourth",
      description: "bad",
    },
    {
      title: "fifth",
      description: "bad",
    },
    {
      title: "fifth",
      description: "bad",
    },
    {
      title: "...",
      description: "bad",
    },
  ];

  return (
    <div className="products-items">
      {lights.map((lights, index) => {
        return (
          <div className="item-box" key={index}>
            <h1>{lights.title}</h1>
            <p>{lights.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Items;