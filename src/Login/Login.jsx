import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      alert("Сначала зарегистрируйтесь");
      return;
    }

    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      alert("Неверный email или пароль");
      return;
    }

    onLogin(savedUser.name);
  }

  return (
    <div className="modal">
      <div className="login-box">
        <button className="close" onClick={onClose}>
          ×
        </button>

        <h2>Вход</h2>

        <p>Войдите в King Pizza</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          onClick={login}
        >
          Войти
        </button>
      </div>
    </div>
  );
}