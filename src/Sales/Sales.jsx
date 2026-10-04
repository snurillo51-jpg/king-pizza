import "./Sales.css";

export default function Sales({ addToCart }) {
  const sales = [
    {
      name: "Пицца Пепперони",
      oldPrice: 599,
      price: 449,
      discount: "−25%",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e"
    },
    {
      name: "Пицца Маргарита",
      oldPrice: 499,
      price: 399,
      discount: "−20%",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
      name: "Пицца 4 сыра",
      oldPrice: 699,
      price: 549,
      discount: "−21%",
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
    },
    {
      name: "Пицца Гавайская",
      oldPrice: 649,
      price: 499,
      discount: "−23%",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
      name: "Комбо для двоих",
      oldPrice: 699,
      price: 599,
      discount: "−14%",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },
    {
      name: "Семейное комбо",
      oldPrice: 1199,
      price: 999,
      discount: "−17%",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    }
  ];

  return (
    <div className="sales-page">
      <h1>🔥 Скидки</h1>

      <div className="sales-list">
        {sales.map((sale) => (
          <div className="sale-card" key={sale.name}>
            <div className="sale-label">
              {sale.discount}
            </div>

            <img
              src={sale.image}
              alt={sale.name}
            />

            <h3>{sale.name}</h3>

            <div className="sale-price">
              <span>{sale.oldPrice} ₽</span>
              <b>{sale.price} ₽</b>
            </div>

            <button
              onClick={() => addToCart(sale)}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}