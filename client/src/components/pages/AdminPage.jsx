

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardpage from "../ui/Cardpage";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import OffCanvasTop from "../ui/OffCanvasTop";
import ModalUpdate from "../ui/ModalUpdate";
import axiosInstance from "../api/axiosInstance";

export default function AdminPage() {
  const [clocks, setClocks] = useState([]);
  const [show, setShow] = useState(false);
  const [editingClock, setEditingClock] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("/api/clocks/all").then((res) => setClocks(res.data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axiosInstance
      .post("/clocks/newclock", data)
      .then((res) => setClocks([res.data, ...clocks]));
    handleClose();
  };

  const deleteHandler = (id) => {
    axiosInstance.delete(`/clocks/${id}`);
    setClocks((prev) => prev.filter((el) => el.id !== id));
  };

  const editHandler = (e, id) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axiosInstance
      .put(`/clocks/${id}`, data)
      .then((res) =>
        setClocks((prev) => prev.map((el) => (el.id === id ? res.data : el)))
      );
    setEditingClock(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "40px 0",
        color: "#f5f5f5",
      }}
    >
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#d4af37",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Панель администратора — Часовой Бутик
        </h1>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Button
            variant="dark"
            onClick={handleShow}
            style={{
              background: "linear-gradient(145deg, #d4af37, #b8860b)",
              border: "none",
              padding: "10px 25px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1b1b1b",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.5)";
            }}
          >
            Добавить часы
          </Button>
        </div>

        <OffCanvasTop
          submitHandler={submitHandler}
          show={show}
          handleClose={handleClose}
        />

        <Row className="g-4">
          {clocks.map((clock) => (
            <Col key={clock.id} sm={12} md={6} lg={4}>
              <div
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "15px",
                  padding: "15px",
                  border: "1px solid #d4af37",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.5)";
                }}
              >
                <Cardpage
                  clock={clock}
                  deleteHandler={deleteHandler}
                  handleModalShow={(id) => setEditingClock(id)}
                />
              </div>
            </Col>
          ))}
        </Row>

        <ModalUpdate
          show={editingClock !== null}
          clock={clocks.find((clock) => clock.id === editingClock)}
          onHide={() => setEditingClock(null)}
          editHandler={editHandler}
        />
      </Container>
    </div>
  );
}

