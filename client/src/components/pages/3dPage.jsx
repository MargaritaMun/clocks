// import React, { useRef, useState } from 'react';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// // Первая модель
// function ClockModel({ modelRef, ...props }) {
//   const { scene } = useGLTF('../../../public/clock.glb/scene.gltf');
//   return (
//     <primitive ref={modelRef} object={scene} scale={[3, 3, 3]} {...props} />
//   );
// }

// // Вторая модель
// function SecondModel({ modelRef, ...props }) {
//   const { scene } = useGLTF('../../../public/img1.glb/scene1.gltf');
//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={[1.5, 1.5, 1.5]}
//       {...props}
//     />
//   );
// }

// export default function ThereDPage() {
//   const [showSecond, setShowSecond] = useState(false); // переключатель моделей

//   const modelRef = useRef(); // ссылка на модель

//   const handleToggle = () => {
//     // Сбрасываем поворот и позицию
//     if (modelRef.current) {
//       modelRef.current.position.set(0, 0, 0);
//       modelRef.current.rotation.set(0, 0, 0);
//     }
//     setShowSecond((prev) => !prev);
//   };

//   return (
//     <div>
//       {/* Кнопка для переключения */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button onClick={handleToggle}>
//           {showSecond ? 'Показать первую модель' : 'Показать вторую модель'}
//         </button>
//       </div>

//       {/* 3D сцена */}
//       <div style={{ height: 500, margin: '40px 0' }}>
//         <Canvas camera={{ position: [6, 3, 6], fov: 45 }}>
//           <color attach="background" args={['#f0f0f0']} />
//           <ambientLight intensity={1} />
//           <directionalLight position={[5, 5, 5]} intensity={1.2} />
//           <pointLight position={[-5, 5, -5]} intensity={0.8} />

//           {/* Если showSecond true — показываем вторую модель, иначе первую */}
//           {showSecond ? (
//             <SecondModel modelRef={modelRef} position={[0, 0, 0]} />
//           ) : (
//             <ClockModel modelRef={modelRef} position={[0, 0, 0]} />
//           )}

//           <OrbitControls />
//         </Canvas>
//       </div>
//     </div>
//   );
// }

// // Предзагрузка
// useGLTF.preload('../../../public/clock.glb/scene.gltf');
// useGLTF.preload('../../../public/img1.glb/scene1.gltf');



import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// 🎨 Стили
const Page = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f8f6;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #b4933a;
  letter-spacing: 3px;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #f6d365, #b4933a);
  color: #fff;
  border: none;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(180, 150, 90, 0.4);
  }
`;

const CanvasContainer = styled.div`
  height: 600px;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 60px rgba(180, 150, 90, 0.15);
`;

// Модели
function ClockModel({ modelRef, ...props }) {
  const { scene } = useGLTF('/clock.glb/scene.gltf');
  return <primitive ref={modelRef} object={scene} scale={[3, 3, 3]} {...props} />;
}

function SecondModel({ modelRef, ...props }) {
  const { scene } = useGLTF('/img1.glb/scene1.gltf');
  return <primitive ref={modelRef} object={scene} scale={[1.5, 1.5, 1.5]} {...props} />;
}

export default function ThereDPage() {
  const [showSecond, setShowSecond] = useState(false);
  const modelRef = useRef();

  const handleToggle = () => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0);
      modelRef.current.rotation.set(0, 0, 0);
    }
    setShowSecond((prev) => !prev);
  };

  return (
    <Page>
      {/* Заголовок */}
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Элитные часы
      </Title>

      {/* Кнопка */}
      <Button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showSecond ? 'Показать первую модель' : 'Показать вторую модель'}
      </Button>

      {/* 3D сцена */}
      <CanvasContainer>
        <Canvas camera={{ position: [6, 3, 6], fov: 45 }}>
          <color attach="background" args={['#fafafa']} />
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 15, 10]} angle={0.3} intensity={1.5} color="#fff8e7" />
          <pointLight position={[-5, 5, -5]} intensity={1.2} color="#FFD700" />

          {showSecond ? (
            <SecondModel modelRef={modelRef} position={[0, 0, 0]} />
          ) : (
            <ClockModel modelRef={modelRef} position={[0, 0, 0]} />
          )}

          <OrbitControls autoRotate autoRotateSpeed={1} />
        </Canvas>
      </CanvasContainer>
    </Page>
  );
}

useGLTF.preload('/clock.glb/scene.gltf');
useGLTF.preload('/img1.glb/scene1.gltf');
