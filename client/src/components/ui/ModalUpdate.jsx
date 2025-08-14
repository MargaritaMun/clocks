import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default function ModalUpdate({ show, onHide, editHandler, clock }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Form onSubmit={editHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Name clock" defaultValue={clock?.name}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="link to photo"
            />
          </Form.Group>{' '}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Description"
            />
          </Form.Group>{' '}
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}
