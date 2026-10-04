import "./Cart.css";

export default function Cart({ cart, removeFromCart }) {

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        <>
          <div className="cart-list">

            {cart.map((pizza, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={pizza.image}
                  alt={pizza.name}
                />

                <div className="cart-info">

                  <h3>{pizza.name}</h3>

                  <p>
                    Размер: {pizza.size}
                  </p>

                  <p>
                    Цена: {pizza.price} $
                  </p>

                  <p>
                    Количество: {pizza.quantity}
                  </p>

                  <b>
                    Сумма: {pizza.price * pizza.quantity} $
                  </b>

                  <br />

                  <button
                    className="delete-button"
                    onClick={() => removeFromCart(index)}
                  >
                    🗑️ Удалить
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-total">
            Итого: {total} $
          </div>
        </>
      )}

    </div>
  );
}