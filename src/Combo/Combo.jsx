import "./Combo.css";

export default function Combo({ addToCart }) {
  const combos = [
    {
      name: "Комбо Классика",
      description: "Пицца + картофель фри + напиток",
      price: 499,
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
    },
    {
      name: "Комбо Большое",
      description: "Большая пицца + 2 напитка + картофель",
      price: 799,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
      name: "Комбо для двоих",
      description: "Пицца + 2 напитка",
      price: 599,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },
    {
      name: "Семейное комбо",
      description: "2 пиццы + 4 напитка",
      price: 999,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
      name: "Мини-комбо",
      description: "Маленькая пицца + напиток",
      price: 349,
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
    },
    {
      name: "Комбо Пати",
      description: "2 большие пиццы + 4 напитка + картофель",
      price: 1199,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    }
  ];

  return (
    <div className="combo-page">
      <h1>🍕 Комбо</h1>

      <div className="combo-list">
        {combos.map((combo) => (
          <div className="combo-card" key={combo.name}>
            <img
              src={combo.image}
              alt={combo.name}
            />

            <h3>{combo.name}</h3>

            <p>{combo.description}</p>

            <div className="combo-bottom">
              <b>{combo.price} ₽</b>

              <button
                onClick={() => addToCart(combo)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}