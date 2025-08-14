import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function OffCanvasTop({ show, handleClose,submitHandler }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="top">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name clock" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" type="text" placeholder="link to photo" />
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
    </Offcanvas>
  );
}
