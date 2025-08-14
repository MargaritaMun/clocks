import React from "react";

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.6 }}>
      {/* Шапка страницы */}
      <section
        style={{
          background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>О нас</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem" }}>
          Мы создаем не просто часы — мы создаем историю, которую можно носить
          на запястье. Качество, стиль и точность — наша философия.
        </p>
      </section>

      {/* Секция с историей */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <img
          src="/images/watch_history.jpg"
          alt="История бренда"
          style={{
            flex: "1 1 400px",
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
        <div style={{ flex: "1 1 400px" }}>
          <h2>Наша история</h2>
          <p>
            Наш бренд начал свой путь более 20 лет назад, с небольшой мастерской
            по ремонту часов. Сегодня мы — команда мастеров, дизайнеров и
            инженеров, объединенных одной целью: создавать часы, которые
            вдохновляют.
          </p>
          <p>
            Каждая модель проходит строгий контроль качества и собирается с
            вниманием к каждой детали. Мы гордимся тем, что наши часы служат
            долгие годы и становятся семейными реликвиями.
          </p>
        </div>
      </section>

      {/* Секция с ценностями */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Наши ценности
        </h2>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Точность",
              text: "Мы используем только надежные механизмы, проверенные временем.",
            },
            {
              title: "Стиль",
              text: "Каждый дизайн продуман до мелочей, чтобы часы выглядели элегантно.",
            },
            {
              title: "Долговечность",
              text: "Наши материалы и сборка обеспечивают долгий срок службы.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Секция с фото команды */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Наша команда</h2>
        <p>Мы — люди, которые делают часы с любовью и вниманием к деталям.</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {["team1.jpg", "team2.jpg", "team3.jpg"].map((img, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img
                src={`/images/${img}`}
                alt={`Сотрудник ${i + 1}`}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              />
              <p style={{ marginTop: "10px" }}>Имя Фамилия</p>
              <small>Должность</small>
            </div>
          ))}
        </div>
      </section>

      {/* Подвал */}
      <footer
        style={{
          background: "#203a43",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} WatchBrand — Все права защищены
      </footer>
    </div>
  );
}
