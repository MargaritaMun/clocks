
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function SigninPage({ signinHandler }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signinHandler(e);
      setError(null);
    } catch (err) {
      setError("Неверное имя или пароль");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(120deg, #1b1b1b, #2e2e2e)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <Container
        style={{
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#d4af37",
            letterSpacing: "1px",
          }}
        >
          Вход в аккаунт
        </h2>

        {error && (
          <Alert
            variant="danger"
            style={{
              textAlign: "center",
              backgroundColor: "rgba(255,0,0,0.1)",
              border: "1px solid red",
              color: "white",
            }}
          >
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              name="name"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
                border: "1px solid #d4af37",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              name="password"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
                border: "1px solid #d4af37",
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#d4af37",
              border: "none",
              width: "100%",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Войти
          </Button>
        </Form>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
