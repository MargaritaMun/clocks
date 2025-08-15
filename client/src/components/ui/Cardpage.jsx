// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export default function Cardpage({ clock, deleteHandler, handleModalShow }) {
//   return (
   
//       <Card style={{ width: '20rem' }}>
//         <Card.Img variant="top" style={{ width: '250px' }} src={clock.image} />
//         <Card.Body>
//           <Card.Title>{clock.name}</Card.Title>
//           <Card.Text>{clock.description}</Card.Text>
//           <Button variant="dark" onClick={() => handleModalShow(clock.id)}>
//             Изменить
//           </Button>{' '}
//           {'   '}
//           <Button variant="dark" onClick={() => deleteHandler(clock.id)}>
//             Удалить
//           </Button>
//         </Card.Body>
//       </Card>

//   );
// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cardpage({ clock, deleteHandler, handleModalShow }) {
  return (
    <Card
      style={{
        width: '20rem',
        height: '50rem', // фиксированная высота для всех карточек
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #d4af37',
        borderRadius: '15px',
        backgroundColor: '#1e1e1e',
        color: '#f5f5f5',
        padding: '10px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
      }}
    >
      {clock.image && (
        <Card.Img
          variant="top"
          src={clock.image}
          style={{
            width: '100%',
            height: '450px',
            objectFit: 'cover', // чтобы изображение не растягивалось
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        />
      )}
      <Card.Body style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>{clock.name}</Card.Title>
          <Card.Text
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 4, // ограничение по строкам
              WebkitBoxOrient: 'vertical',
            }}
          >
            {clock.description}
          </Card.Text>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="dark" onClick={() => handleModalShow(clock.id)}>
            Изменить
          </Button>
          <Button variant="dark" onClick={() => deleteHandler(clock.id)}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
