import { useState } from "react";
import "./Register.css";

export default function Register({ onRegister, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  function register() {
    if (!name || !email || !password || !repeat) {
      alert("Заполните все поля");
      return;
    }

    if (!email.includes("@")) {
      alert("Введите правильный email");
      return;
    }

    if (password.length < 6) {
      alert("Пароль должен быть минимум 6 символов");
      return;
    }

    if (password !== repeat) {
      alert("Пароли не совпадают");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Регистрация успешна!");

    onRegister(name);
  }

  return (
    <div className="modal">
      <div className="register-box">
        <button
          className="close"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Создать аккаунт</h2>

        <p>Зарегистрируйтесь в King Pizza</p>

        <input
          type="text"
          placeholder="Имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Повторите пароль"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />

        <button
          className="register-button"
          onClick={register}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}