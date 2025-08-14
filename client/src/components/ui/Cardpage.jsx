
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cardpage({ clock, deleteHandler, handleModalShow }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '250px' }} src={clock.image} />
      <Card.Body>
        <Card.Title>{clock.name}</Card.Title>
        <Card.Text>{clock.description}</Card.Text>
        <Button variant="primary" onClick={() => handleModalShow(clock.id)} >
          Изменить
        </Button>{' '}
        {'   '}
        <Button variant="primary" onClick={() => deleteHandler(clock.id)}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
