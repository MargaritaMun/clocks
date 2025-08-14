
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardpage from '../ui/Cardpage';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import OffCanvasTop from '../ui/OffCanvasTop';
import ModalUpdate from '../ui/ModalUpdate';

export default function AdminPage() {
  const [clocks, setClocks] = useState([]);
  const [show, setShow] = useState(false);
  const [editingClock, setEditingClock] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('/api/clocks/all').then((res) => setClocks(res.data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axios.post('/api/clocks/newclock', data).then((res) => setClocks(res.data));
    handleClose();
  };

  const deleteHandler = (id) => {
    axios.delete(`/api/clocks/${id}`);
    setClocks((prev) => prev.filter((el) => el.id !== id));
  };

  const editHandler = (e, id) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axios
      .patch(`/api/clocks/${id}`, data)
      .then((res) =>
        setClocks((prev) => prev.map((el) => (el.id === id ? res.data : el)))
      );
    setEditingClock(null); // Закрыть модалку после сохранения
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Добавить
      </Button>

      <OffCanvasTop
        submitHandler={submitHandler}
        show={show}
        handleClose={handleClose}
      />

      <Row>
        {clocks.map((clock) => (
          <Col key={clock.id}>
            <Cardpage
              clock={clock}
              deleteHandler={deleteHandler}
              handleModalShow={(id) => setEditingClock(id)}
            />
          </Col>
        ))}
      </Row>

      <ModalUpdate
        show={editingClock !== null}
        clock={clocks.find((clock) => clock.id === editingClock)}
        onHide={() => setEditingClock(null)} // Закрытие по кнопке или кресту
        editHandler={editHandler}
      />
    </Container>
  );
}
