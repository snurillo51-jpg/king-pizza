import "./Drinks.css";

export default function Drinks({ addToCart }) {
  const drinks = [
    {
      name: "Coca-Cola",
      price: 120,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7"
    },
    {
      name: "Sprite",
      price: 160,
      image: "https://th.bing.com/th/id/OIP.NiC8Udi56nMKk8Lex0TUawHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Fanta",
      price: 125,
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca"
    },
    {
      name: "Апельсиновый сок",
      price: 150,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba"
    },
    {
      name: "Вода",
      price: 80,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d"
    },
    {
      name: "Лимонад",
      price: 140,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
    },

    {
      name: "Coffee",
      price: 165,
      image: "https://tse1.mm.bing.net/th/id/OIP.JW4mRkT1QYdgSalt88R1TgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      name: "Pepsi",
      price: 100,
      image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e"
    },
    {
      name: "Горячий чай",
      price: 90,
      image: "https://th.bing.com/th/id/OIP.4CBWMlLKoYiDwtVJE4zrGQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <div className="drinks-page">
      <h1>🥤 Напитки</h1>

      <div className="drinks-list">
        {drinks.map((drink) => (
          <div className="drink-card" key={drink.name}>
            <img
              src={drink.image}
              alt={drink.name}
            />

            <h3>{drink.name}</h3>

            <div className="drink-bottom">
              <b>{drink.price} ₽</b>

              <button
                onClick={() => addToCart(drink)}
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