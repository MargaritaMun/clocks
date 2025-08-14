import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default function ModalUpdate({ show, onHide, editHandler, clock }) {
  return (
    <Modal
      show={show}
      onHide={onHide} // закрытие по крестику или клику вне окна
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Form onSubmit={(e) => editHandler(e, clock.id)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name clock"
              defaultValue={clock?.name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="link to photo"
              defaultValue={clock?.image}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Description"
              defaultValue={clock?.description}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Сохранить
          </Button>{' '}
          <Button variant="secondary" type="button" onClick={onHide}>
            Отменить
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}
