// import React from 'react';

// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router';

// export default function Ololopage() {
//   return (
//     <div>
//       <h1>Вы серьезно думали, что мы не прописали ололо?!</h1>
//       <h2>"Мы всё видели... даже твой ололо." 😏</h2>
//       <img
//         src="https://masterpiecer-images.s3.yandex.net/dd7f70606dae11eebec4429f31467427:upscaled"
//         alt="ololo img"
//       />
//       <Button variant="primary" as={Link} to="/">
//         на главную
//       </Button>
//     </div>
//   );
// }


import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

export default function Ololopage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Вы серьезно думали, что мы не прописали ололо?!
        </h1>
        <h2 style={styles.subtitle}>
          "Мы всё видели... даже твой ололо." 😏
        </h2>
        <img
          src="https://masterpiecer-images.s3.yandex.net/dd7f70606dae11eebec4429f31467427:upscaled"
          alt="ololo img"
          style={styles.image}
        />
      </div>

      <div style={styles.footer}>
        <Button variant="primary" as={Link} to="/" style={styles.button}>
          на главную
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: '#555',
  },
  image: {
    maxWidth: '80%',
    height: 'auto',
    marginBottom: '30px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
  },
  footer: {
    paddingBottom: '20px',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
  },
};
