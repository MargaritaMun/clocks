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
  const [modalShow, setModalShow] = useState(false);

  const [editingClock, setEditingClock] = useState(null);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = (id) => setEditingClock(id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const handler
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
    axios
      .patch(`/api/clocks/${id}`)
      .then((res) =>
        setClocks((prev) => prev.map((el) => (el.id === id ? res.data : el)))
      );
  };
  console.log(clocks);
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
              handleModalShow={handleModalShow}
            />
          </Col>
        ))}
      </Row>
      <ModalUpdate
        show={editingClock !== null}
        clock={clocks.find((clock) => clock.id === editingClock)}
        onHide={handleModalClose}
        editHandlerv={editHandler}
      />
    </Container>
  );
}
