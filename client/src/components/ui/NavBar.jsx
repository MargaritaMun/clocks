// import React from 'react';
// import { Link, useNavigate } from 'react-router';
// export default function NavBar({ user, logoutHandler, navigateAbout }) {
//   const navigate = useNavigate();

//   const handleScrollToForm = () => {
//     // 1. Переходим на главную страницу (если уже не на ней)
//     navigate('/');
//     setTimeout(() => {
//       const formElement = document.getElementById('contact-form');
//       if (formElement) {
//         formElement.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       }
//     }, 50); // Небольшая задержка
//   };
//   return (
//     <header>
//       <div>
//         {user ? (
//           <div>
//             <div>Администратор</div>
//             <button onClick={logoutHandler}>Выйти</button>
//             <button onClick={() => navigate('/application')}>Заявки</button>
//             <button onClick={() => navigate('/admin')}>Админ</button>
//           </div>
//         ) : (
//           <div>
//             <button onClick={() => navigate('/signin')}>Войти</button>
//             <button onClick={handleScrollToForm}>Перейти к форме</button>{' '}
//             <button onClick={navigateAbout}>О нас</button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function NavBar({ user, logoutHandler, navigateAbout }) {
  const navigate = useNavigate();

  const handleScrollToForm = () => {
    navigate('/');
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 50);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}> {/* Можно оставить логотип или название сайта */}
          <Link to="/" style={styles.logoLink}>Watch Elegance</Link>
        </div>
        {user ? (
          <div style={styles.navGroup}>
            <div style={styles.adminLabel}>Администратор</div>
            <button style={styles.btn} onClick={logoutHandler}>Выйти</button>
            <button style={styles.btn} onClick={() => navigate('/application')}>Заявки</button>
            <button style={styles.btn} onClick={() => navigate('/admin')}>Админ</button>
          </div>
        ) : (
          <div style={styles.navGroup}>
            <button style={styles.btn} onClick={() => navigate('/signin')}>Войти</button>
            <button style={styles.btn} onClick={handleScrollToForm}>Перейти к форме</button>
            <button style={styles.btn} onClick={navigateAbout}>О нас</button>
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    background: 'linear-gradient(90deg, #222, #555)',
    padding: '1rem 2rem',
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.2rem',
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  navGroup: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginLeft: 'auto', // Кнопки будут справа
  },
  adminLabel: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
  },
  btn: {
    borderRadius: '50px',
    padding: '0.5rem 1.2rem',
    fontWeight: 600,
    background: 'linear-gradient(135deg, #444, #222)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
};
