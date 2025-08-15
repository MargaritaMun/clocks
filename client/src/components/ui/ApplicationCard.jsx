// import React from 'react';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export default function ApplicationCard({ application, handlerDelete }) {
//   return (
//     <div>
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>{application.userName}</Card.Title>
//           <Card.Text>{application.phoneNumber}</Card.Text>
//           <Card.Text>{application.description}</Card.Text>
//         </Card.Body>
//         <Card.Img variant="top" src={application.image} />
//         <Button onClick={() => handlerDelete(application.id)}>Выполнено</Button>
//       </Card>
//     </div>
//   );
// }


import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ApplicationCard({ application, handlerDelete }) {
  return (
    <Card 
      style={{ 
        width: '250px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        border: '1px solid #ccc',
        marginBottom: '20px'
      }}
    >
      {application.image && (
        <Card.Img 
          variant="top" 
          src={application.image} 
          style={{ width: '100%', height: 'auto' }} 
        />
      )}
      <Card.Body style={{ flexGrow: 1 }}>
        <Card.Title>{application.userName}</Card.Title>
        <Card.Text>Телефон: {application.phoneNumber}</Card.Text>
        <Card.Text>{application.description}</Card.Text>
      </Card.Body>
      <Button 
        variant="dark" 
        onClick={() => handlerDelete(application.id)} 
        style={{ margin: '10px' }}
      >
        Выполнено
      </Button>
    </Card>
  );
}
