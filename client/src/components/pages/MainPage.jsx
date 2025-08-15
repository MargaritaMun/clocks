// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/esm/Container';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AIChatWidget from './AiPage'; // импорт виджета чата
// import ThereDPage from './3dPage';

// export default function MainPage({ submitHandler }) {
//   const [clocks, setClocks] = useState([]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   if (window.location.hash === "#contact-form") {
//     const formElement = document.getElementById("contact-form");
//     if (formElement) {
//       formElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }

//   useEffect(() => {
//     axios.get('/api/clocks/all').then((res) => setClocks(res.data));
//   }, []);

//   return (
//     <div>
//       <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
//         <Container>
//           <Slider {...settings}>
//             {clocks.map((clock) => (
//               <div key={clock.id}>
//                 <p>{clock.name}</p>
//                 <img src={clock.image} width={180} alt={clock.name} />
//                 <p>{clock.description}</p>
//               </div>
//             ))}
//           </Slider>
//         </Container>
//       </div>
//             <ThereDPage />
//       <section id="contact-form">
//         <h2>Контактная форма</h2>
//         <form onSubmit={submitHandler}>
//           <label>
//             Name: <input type="text" name="userName" />
//           </label>
//           <div>
//             <label>
//               Phone: <input type="text" name="phoneNumber" />
//             </label>
//           </div>
//           <div>
//             <label>
//               Image: <input type="text" name="image" />
//             </label>
//           </div>
//           <div>
//             <label>
//               Description: <input type="text" name="description" />
//             </label>
//           </div>
//           <button>Отправить форму</button>
//         </form>
//       </section>

//       {/* Чат-виджет всегда поверх */}
//       <AIChatWidget />
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import AIChatWidget from './AiPage';
// import ThereDPage from './3dPage';
// import styled from 'styled-components';

// // 🎨 Стили
// const Page = styled.div`
//   background-color: #000;
//   color: #fff;
//   font-family: 'Playfair Display', serif;
// `;

// const SliderWrapper = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 50px 20px;
// `;

// const SlideCard = styled.div`
//   background: rgba(20, 20, 20, 0.9);
//   padding: 20px;
//   border-radius: 15px;
//   text-align: center;
//   box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 0 25px rgba(255, 215, 0, 0.3);
//   }
// `;

// const ClockImage = styled.img`
//   border-radius: 10px;
//   margin: 15px 0;
// `;

// const ContactSection = styled.section`
//   padding: 60px 20px;
//   text-align: center;
//   background: linear-gradient(180deg, #000, #111);
// `;

// const ContactTitle = styled.h2`
//   font-size: 2rem;
//   color: #ffd700;
//   margin-bottom: 30px;
//   text-transform: uppercase;
// `;

// const ContactForm = styled.form`
//   max-width: 500px;
//   margin: 0 auto;
//   background: rgba(20, 20, 20, 0.95);
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
// `;

// const FormField = styled.div`
//   margin-bottom: 15px;
//   text-align: left;
//   label {
//     display: block;
//     font-size: 0.9rem;
//     margin-bottom: 5px;
//     color: #ccc;
//   }
//   input {
//     width: 100%;
//     padding: 10px;
//     border: none;
//     border-radius: 8px;
//     background: #1a1a1a;
//     color: #fff;
//     outline: none;
//   }
// `;

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #ffd700, #c19d53);
//   color: #000;
//   padding: 12px 25px;
//   font-size: 1rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0 0 15px #ffd700;
//   }
// `;

// export default function MainPage({ submitHandler }) {
//   const [clocks, setClocks] = useState([]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   useEffect(() => {
//     axios.get('/api/clocks/all').then((res) => setClocks(res.data));
//   }, []);

//   return (
//     <Page>
//       {/* Слайдер */}
//       <SliderWrapper>
//         <Slider {...settings}>
//           {clocks.map((clock) => (
//             <SlideCard key={clock.id}>
//               <p>{clock.name}</p>
//               <ClockImage src={clock.image} width={180} alt={clock.name} />
//               <p>{clock.description}</p>
//             </SlideCard>
//           ))}
//         </Slider>
//       </SliderWrapper>

//       {/* 3D модель */}
//       <ThereDPage />

//       {/* Контактная форма */}
//       <ContactSection id="contact-form">
//         <ContactTitle>Контактная форма</ContactTitle>
//         <ContactForm onSubmit={submitHandler}>
//           <FormField>
//             <label>Name:</label>
//             <input type="text" name="userName" />
//           </FormField>
//           <FormField>
//             <label>Phone:</label>
//             <input type="text" name="phoneNumber" />
//           </FormField>
//           <FormField>
//             <label>Image:</label>
//             <input type="text" name="image" />
//           </FormField>
//           <FormField>
//             <label>Description:</label>
//             <input type="text" name="description" />
//           </FormField>
//           <SubmitButton>Отправить форму</SubmitButton>
//         </ContactForm>
//       </ContactSection>

//       {/* Чат */}
//       <AIChatWidget />
//     </Page>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AIChatWidget from './AiPage';
import ThereDPage from './3dPage';
import styled from 'styled-components';

// 🎨 Стили
const Page = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Playfair Display', serif;
`;

const SliderWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const SlideCard = styled.div`
  background: rgba(20, 20, 20, 0.95);
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 350px;
  padding: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.3);
  }
`;

const ClockImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px 0;
`;

const ClockTitle = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ClockDescription = styled.p`
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const ContactSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(180deg, #000, #111);
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background: rgba(20, 20, 20, 0.95);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
  text-align: left;

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #ccc;
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #1a1a1a;
    color: #fff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ffd700, #c19d53);
  color: #000;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 15px #ffd700;
  }
`;

export default function MainPage({ submitHandler }) {
  const [clocks, setClocks] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    axios.get('/api/clocks/all').then((res) => setClocks(res.data));
  }, []);

  return (
    <Page>
      {/* Слайдер */}
      <SliderWrapper>
        <Slider {...settings}>
          {clocks.map((clock) => (
            <SlideCard key={clock.id}>
              <ClockTitle>{clock.name}</ClockTitle>
              {clock.image && <ClockImage src={clock.image} alt={clock.name} />}
              <ClockDescription>{clock.description}</ClockDescription>
            </SlideCard>
          ))}
        </Slider>
      </SliderWrapper>

      {/* 3D модель */}
      <ThereDPage />

      {/* Контактная форма */}
      <ContactSection id="contact-form">
        <ContactTitle>Контактная форма</ContactTitle>
        <ContactForm onSubmit={submitHandler}>
          <FormField>
            <label>Name:</label>
            <input type="text" name="userName" />
          </FormField>
           <FormField>
            <label>Email:</label>
            <input type="email" name="email" />
          </FormField>
          <FormField>
            <label>Phone:</label>
            <input type="text" name="phoneNumber" />
          </FormField>
          <FormField>
            <label>Image:</label>
            <input type="text" name="image" />
          </FormField>
          <FormField>
            <label>Description:</label>
            <input type="text" name="description" />
          </FormField>
          <SubmitButton>Отправить форму</SubmitButton>
        </ContactForm>
      </ContactSection>

      {/* Чат */}
      <AIChatWidget />
    </Page>
  );
}
