import { useState } from "react";

export default function PizzaCard({ pizza, addToCart }) {
  const [size, setSize] = useState("Маленький");

  let price = pizza.price;

  if (size === "Средний") {
    price = pizza.price + 100;
  }

  if (size === "Большой") {
    price = pizza.price + 200;
  }

  return (
    <div className="card">
      <img src={pizza.image} alt={pizza.name} />

      <h3>{pizza.name}</h3>

      <p>{pizza.description}</p>

      <div className="pizza-price">
        {price} $
      </div>

      <div className="sizes">
        <button
          className={size === "Маленький" ? "active" : ""}
          onClick={() => setSize("Маленький")}
        >
          Маленький
        </button>

        <button
          className={size === "Средний" ? "active" : ""}
          onClick={() => setSize("Средний")}
        >
          Средний
        </button>

        <button
          className={size === "Большой" ? "active" : ""}
          onClick={() => setSize("Большой")}
        >
          Большой
        </button>
      </div>

      <div className="bottom">
        <button onClick={() => addToCart(pizza, size, price)}>
          В корзину
        </button>
      </div>
    </div>
  );
}