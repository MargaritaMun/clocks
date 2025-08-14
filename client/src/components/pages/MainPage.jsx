import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainPage({ submitHandler }) {
  const [clocks, setClocks] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (window.location.hash === "#contact-form") {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    axios.get('/api/clocks/all').then((res) => setClocks(res.data));
  }, []);

  return (
    <div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Container>
          <Slider {...settings}>
            {clocks.map((clock) => (
              <div key={clock.id}>
                <p>{clock.name}</p> <img src={clock.image} width={180} />
                <p>{clock.description} </p>
              </div>
            ))}
          </Slider>
        </Container>

      </div>
      <section id="contact-form">
        <h2>Контактная форма</h2>
        <form onSubmit={submitHandler}>
          <label>
            Name: <input type="text" name="userName" />
          </label>

          <div>
            <label>
              Phone: <input type="text" name="phoneNumber" />
            </label>
          </div>
          <div>
            <label>
              Image: <input type="text" name="image" />
            </label>
          </div>
          <div>
            <label>
              Description: <input type="text" name="description" />
            </label>
          </div>
          <button>Отправить форму</button>
        </form>
      </section>
    </div>
  );
}
