import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axiosInstance from '../api/axiosInstance';
import { FaComments, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

function AIChatWidget() {
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    setMessages((prev) => [...prev, { role: 'user', content: data.message }]);
    e.target.reset();

    const response = await axiosInstance.post('/ai/messages', data);
    setMessages((prev) => [...prev, response.data]);
  };

  return (
    <div>
      {/* Кнопка открытия чата */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Button
          variant="dark"
          onClick={() => setOpen(!open)}
          style={{
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          <FaComments size={24} />
        </Button>
      </div>

      {/* Окно чата */}
      {open && (
        <Card
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '300px',
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {/* Шапка с контактами */}
          <Card.Header className="d-flex justify-content-around align-items-center">
            <a
              href="https://t.me/margaret_mun"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0088cc', fontSize: '20px' }}
              title="Написать в Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://wa.me/89170047567"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366', fontSize: '20px' }}
              title="Написать в WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>AI Чат</span>
          </Card.Header>

          {/* Сообщения */}
          <Card.Body style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            {messages.map((message, index) => (
              <Card
                key={index}
                className={`mb-2 ${
                  message.role === 'user'
                    ? 'ms-auto bg-primary text-white'
                    : 'me-auto bg-light'
                }`}
                style={{ maxWidth: '80%' }}
              >
                <Card.Body className="p-2">
                  <small>{message.content}</small>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>

          {/* Форма ввода */}
          <Card.Footer>
            <Form className="d-flex gap-2" onSubmit={submitHandler}>
              <Form.Control
                type="text"
                name="message"
                placeholder="Напишите сообщение..."
                required
              />
              <Button type="submit" variant="primary">
                ➤
              </Button>
            </Form>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default AIChatWidget;
