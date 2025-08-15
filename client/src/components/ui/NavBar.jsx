

import React from "react";
import { Link, useNavigate } from "react-router";
export default function NavBar({ user, logoutHandler, navigateAbout }) {
  const navigate = useNavigate();

  const handleScrollToForm = () => {
    // 1. Переходим на главную страницу (если уже не на ней)
    navigate("/");
    setTimeout(() => {
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        formElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50); // Небольшая задержка
  };
  return (
    <header>
      <div>
        {user ? (
          <div>
            <div>Администратор</div>
            <button onClick={logoutHandler}>Выйти</button>
              <button onClick={() => navigate("/application")}>Заявки</button>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate("/signin")}>Войти</button>
            <button onClick={handleScrollToForm}>Перейти к форме</button>{" "}
            <button onClick={navigateAbout}>О нас</button>
            
          </div>
        )}
      </div>
    </header>
  );
}