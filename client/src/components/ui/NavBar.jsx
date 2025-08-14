// import React from "react";
// import { useState } from "react";
// export default function NavBar({ user }) {
//   return (
//     <header>
//       <div>
//         {user ? <div>Администратор</div> : <button>Войти</button>}
//         <button>Отправить форму</button> <button>О нас</button>
//       </div>
//     </header>
//   );
// }
import React from "react";

export default function NavBar({ user }) {
  const style = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');

    body {
      background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      color: white;
    }

    .navbar {
      backdrop-filter: blur(14px);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 215, 0, 0.05));
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 40px rgba(255, 215, 0, 0.15);
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Inter', sans-serif;
      border-radius: 16px;
      margin: 20px;
    }

    .navbar-left {
      font-size: 1.6rem;
      font-weight: 700;
      color: #f5d76e;
      text-shadow: 0 0 6px rgba(255, 215, 0, 0.4);
    }

    .navbar-right {
      display: flex;
      align-items: center;
    }

    .navbar button, .navbar .label {
      margin-left: 20px;
      padding: 12px 24px;
      border: none;
      background: linear-gradient(145deg, #FFD700, #b8860b);
      color: #fff;
      font-weight: 600;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
      overflow: hidden;
    }

    .navbar button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.4);
      transform: skewX(-20deg);
      transition: 0.75s;
    }

    .navbar button:hover::before {
      left: 125%;
    }

    .navbar .label {
      background: transparent;
      color: #f5d76e;
      font-weight: 600;
      cursor: default;
      text-shadow: 0 0 4px rgba(255, 215, 0, 0.4);
      box-shadow: none;
    }

    .navbar button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
    }

    .navbar button:active {
      transform: translateY(0);
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <header className="navbar">
        <div className="navbar-left">👑 GoldBrand</div>
        <div className="navbar-right">
          {user ? (
            <div className="label">Администратор</div>
          ) : (
            <button>Войти</button>
          )}
          <button>Отправить форму</button>
          <button>О нас</button>
        </div>
      </header>
    </>
  );
}
