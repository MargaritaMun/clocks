import React from "react";

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.8, color: "#2c2c2c" }}>
      {/* Шапка */}
      <section
        style={{
          background: "linear-gradient(120deg, #1b1b1b, #2e2e2e)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", letterSpacing: "2px" }}>
          Watch Elegance
        </h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.3rem", color: "#d4af37" }}>
          Искусство времени в каждой детали
        </p>
      </section>

      {/* История */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "50px",
        }}
      >
        
        <div style={{ flex: "1 1 450px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#d4af37" }}>Наша история</h2>
          <p>
            Более двух десятилетий мы создаем часы, в которых переплетаются
            швейцарская точность, безупречный дизайн и передовые технологии.
          </p>
          <p>
            Каждая модель проходит строгий контроль качества и создается вручную
            мастерами с многолетним опытом. Наши часы становятся не просто аксессуаром,
            а символом статуса и утонченного вкуса.
          </p>
        </div>
      </section>

      {/* Ценности */}
      <section style={{ background: "#f9f7f4", padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px", color: "#d4af37" }}>
          Наши ценности
        </h2>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Точность",
              text: "Швейцарские механизмы, сертифицированные стандартами качества.",
            },
            {
              title: "Эстетика",
              text: "Уникальный дизайн, отражающий характер владельца.",
            },
            {
              title: "Долговечность",
              text: "Материалы премиум-класса, служащие десятилетиями.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#d4af37", marginBottom: "15px" }}>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#fff" }}>
        <h2 style={{ color: "#d4af37", marginBottom: "30px" }}>Контакты</h2>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Адрес:</strong> г. Москва, ул. Времени, 12, бутик Watch Elegance
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Телефон:</strong> <a href="tel:+74951234567" style={{ color: "#d4af37", textDecoration: "none" }}>+7 (495) 123-45-67</a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Email:</strong> <a href="mailto:info@watchelegance.ru" style={{ color: "#d4af37", textDecoration: "none" }}>info@watchelegance.ru</a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Часы работы:</strong> Пн–Вс, 10:00–21:00
        </p>
      </section>

      {/* Подвал */}
      <footer
        style={{
          background: "#1b1b1b",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Watch Elegance — Искусство времени
      </footer>
    </div>
  );
}
