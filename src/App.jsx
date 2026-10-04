import { useState } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart} from "./store/cartSlice";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import Drinks from "./Drinks/Drinks";
import Combo from "./Combo/Combo";
import Sales from "./Sales/Sales";
import "./App.css";

export default function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [search, setSearch] = useState("");

  function registration(name) {
    setUser(name);
    setOpen(false);
  }

  function login(name) {
    setUser(name);
    setLoginOpen(false);
  }

  function logout() {
    setUser("");
  }

  function addProduct(product) {
    if (!user) {
      alert("Сначала войдите в аккаунт");
      setLoginOpen(true);
      return;
    }

    dispatch(addToCart(product));
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <header>
        <div className="logo">
          King <span>Pizza 🍕</span>
        </div>

        <input
          className="header-search"
          type="text"
          placeholder="🔎 Найти пиццу..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <nav>
          <Link to="/">Главная</Link>

          <Link to="/drinks">
            Напитки
          </Link>

          <Link to="/combo">
            Комбо
          </Link>

          <Link to="/sales">
            Скидки
          </Link>
        </nav>

        <div className="account">
          <Link
            className="cart-button"
            to="/cart"
          >
            🛒 Корзина ({cartCount})
          </Link>

          {user ? (
            <>
              <span className="username">
                {user}
              </span>

              <button onClick={logout}>
                Выйти
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setLoginOpen(true)}
              >
                Войти
              </button>

              <button
                onClick={() => setOpen(true)}
              >
                Регистрация
              </button>
            </>
          )}
        </div>
      </header>

      {open && (
        <Register
          onRegister={registration}
          onClose={() => setOpen(false)}
        />
      )}

      {loginOpen && (
        <Login
          onLogin={login}
          onClose={() => setLoginOpen(false)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Catalog
              search={search}
              addToCart={(pizza, size, price) =>
                addProduct({
                  ...pizza,
                  size: size,
                  price: price
                })
              }
            />
          }
        />

        <Route
          path="/drinks"
          element={
            <Drinks
              addToCart={(drink) =>
                addProduct({
                  ...drink,
                  size: "Обычный"
                })
              }
            />
          }
        />

        <Route
          path="/combo"
          element={
            <Combo
              addToCart={(combo) =>
                addProduct({
                  ...combo,
                  size: "Обычный"
                })
              }
            />
          }
        />

        <Route
          path="/sales"
          element={
            <Sales
              addToCart={(sale) =>
                addProduct({
                  name: sale.name,
                  price: sale.price,
                  image: sale.image,
                  size: "Обычный"
                })
              }
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={(index) =>
                dispatch(removeFromCart(index))
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}