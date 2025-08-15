

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
            boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
            background: 'linear-gradient(145deg, #d4af37, #b8860b)',
            border: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.5)';
          }}
        >
          <FaComments size={24} color="white" />
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
            boxShadow: '0 6px 25px rgba(0,0,0,0.5)',
            border: '1px solid #d4af37',
            backgroundColor: '#1b1b1b',
            color: 'white',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          {/* Шапка с контактами */}
          <Card.Header
            className="d-flex justify-content-around align-items-center"
            style={{
              backgroundColor: '#d4af37',
              color: '#1b1b1b',
              fontWeight: 'bold',
              borderBottom: '1px solid #b8860b',
            }}
          >
            <a
              href="https://t.me/margaret_mun"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1b1b1b', fontSize: '20px' }}
              title="Написать в Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://wa.me/89170047567"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1b1b1b', fontSize: '20px' }}
              title="Написать в WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <span style={{ fontSize: '14px' }}>AI Чат</span>
          </Card.Header>

          {/* Сообщения */}
          <Card.Body style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            {messages.map((message, index) => (
              <Card
                key={index}
                className={`mb-2 ${
                  message.role === 'user'
                    ? 'ms-auto'
                    : 'me-auto'
                }`}
                style={{
                  maxWidth: '80%',
                  background:
                    message.role === 'user'
                      ? 'linear-gradient(145deg, #d4af37, #b8860b)'
                      : '#2e2e2e',
                  color: message.role === 'user' ? '#1b1b1b' : 'white',
                  borderRadius: '10px',
                  border: message.role === 'user'
                    ? '1px solid #b8860b'
                    : '1px solid #444',
                }}
              >
                <Card.Body className="p-2">
                  <small>{message.content}</small>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>

          {/* Форма ввода */}
          <Card.Footer style={{ backgroundColor: '#1b1b1b', borderTop: '1px solid #d4af37' }}>
            <Form className="d-flex gap-2" onSubmit={submitHandler}>
              <Form.Control
                type="text"
                name="message"
                placeholder="Напишите сообщение..."
                required
                style={{
                  backgroundColor: '#2e2e2e',
                  color: 'white',
                  border: '1px solid #d4af37',
                }}
              />
              <Button
                type="submit"
                variant="primary"
                style={{
                  backgroundColor: '#d4af37',
                  border: 'none',
                  color: '#1b1b1b',
                  fontWeight: 'bold',
                }}
              >
                ➤
              </Button>
            </Form>
          </Card.Footer>
        </Card>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default AIChatWidget;
