import { useState } from "react";
import "./Catalog.css";

export default function Catalog({ addToCart }) {
  const [search, setSearch] = useState("");

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalog">
      {filteredPizzas.map((pizza) => (
        <div className="card" key={pizza.name}>
          <img src={pizza.image} alt={pizza.name} />

          <h3>{pizza.name}</h3>

          <p>{pizza.description}</p>

          <div className="bottom">
            <button onClick={() => addToCart(pizza)}>
              В корзину
            </button>

            <b>{pizza.price} ₽</b>
          </div>
        </div>
      ))}
    </div>
  );
}