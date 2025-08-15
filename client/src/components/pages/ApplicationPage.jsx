// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ApplicationCard from '../ui/ApplicationCard';
// import Button from 'react-bootstrap/esm/Button';
// import axiosInstance from '../api/axiosInstance';

// export default function ApplicationPage() {
//   const [applications, setApplications] = useState([]);
//   useEffect(() => {
//     axios.get('/api/application').then((res) => setApplications(res.data));
//   }, []);

//   const handlerDelete = (id) => {
//     axios.delete(`/api/application/${id}`);
//     setApplications((prev) => prev.filter((el) => el.id !== id));
//   };
//   return (
//     <div>
//       {applications.map((application) => (
//         <ApplicationCard
//           key={application.id}
//           application={application}
//           handlerDelete={handlerDelete}
//         />
//       ))}
//     </div>
    
//   );
// }


import axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationCard from "../ui/ApplicationCard";
import styled from "styled-components";
import axiosInstance from "../api/axiosInstance";

const PageWrapper = styled.div`
  background-color: #f9f7f4;
  min-height: 100vh;
  padding: 40px;
  color: #2c2c2c;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #d4af37;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const EmptyText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #777;
  margin-top: 40px;
`;

export default function ApplicationPage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("/api/application").then((res) => setApplications(res.data));
  }, []);

  const handlerDelete = (id) => {
    axiosInstance.delete(`/application/${id}`);
    setApplications((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    
    <PageWrapper>
      <Title>Заявки пользователей</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {applications.map((application) => (
        <ApplicationCard 
          key={application.id} 
          application={application} 
          handlerDelete={handlerDelete} 
        />
      ))}
    </div>
    </PageWrapper>
  );
}
