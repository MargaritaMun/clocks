import React from 'react';

export default function ErrorPage() {
  const styleSheet = `
    @keyframes flicker {
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
        opacity: 1;
      }
      20%, 24%, 55% {
        opacity: 0.4;
      }
    }

    @keyframes pulse {
      0%, 100% {
        text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
      }
      50% {
        text-shadow: 0 0 20px #0ff, 0 0 30px #0ff, 0 0 50px #0ff;
      }
    }

    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
  `;

  return (
    <div style={styles.container}>
      {/* Вставка стилей и анимаций */}
      <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
      
      <h1 style={styles.text}>404</h1>
      <p style={styles.subtext}>Страница не найдена</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#000',
    color: '#0ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Orbitron", sans-serif',
    textAlign: 'center',
  },
  text: {
    fontSize: '10rem',
    margin: 0,
    animation: 'flicker 2s infinite',
    textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
  },
  subtext: {
    fontSize: '2rem',
    marginTop: '20px',
    animation: 'pulse 2s infinite',
    color: '#0ff',
    textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
  },
};
