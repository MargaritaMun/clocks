import React from "react";

export default function NavBar({ user }) {
  return (
    <header>
      <div>
        {user ? <div>Администратор</div> : <button>Войти</button>}
        <button>Отправить форму</button> <button>О нас</button>
      </div>
    </header>
  );
}
