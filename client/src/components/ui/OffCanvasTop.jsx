// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// export default function OffCanvasTop({ show, handleClose,submitHandler }) {
//   return (
//     <Offcanvas show={show} onHide={handleClose} placement="top">
//       <Form onSubmit={submitHandler}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Name</Form.Label>
//           <Form.Control name="name" type="text" placeholder="Name clock" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Image</Form.Label>
//           <Form.Control name="image" type="text" placeholder="link to photo" />
//         </Form.Group>{' '}
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             name="description"
//             type="text"
//             placeholder="Description"
//           />
//         </Form.Group>{' '}
//         <Button variant="primary" type="submit">
//           Добавить
//         </Button>
//       </Form>
//     </Offcanvas>
//   );
// }


import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OffCanvasTop({ show, handleClose, submitHandler }) {
  return (
    <Offcanvas 
      show={show} 
      onHide={handleClose} 
      placement="top"
      style={styles.offcanvas}
    >
      <Offcanvas.Body style={styles.body}>
        <Form onSubmit={submitHandler} style={styles.form}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Name</Form.Label>
            <Form.Control 
              name="name" 
              type="text" 
              placeholder="Name clock" 
              style={styles.input}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Image</Form.Label>
            <Form.Control 
              name="image" 
              type="text" 
              placeholder="link to photo" 
              style={styles.input}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Description</Form.Label>
            <Form.Control 
              name="description" 
              type="text" 
              placeholder="Description" 
              style={styles.input}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={styles.btn}>
            Добавить
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

const styles = {
  offcanvas: {
    fontFamily: "'Cinzel', serif",
    background: 'linear-gradient(145deg, #fff, #f5f5f5)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    borderRadius: '0 0 1rem 1rem',
  },
  body: {
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#222',
  },
  input: {
    borderRadius: '10px',
    border: '1px solid #ccc',
    padding: '0.6rem 1rem',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.05)',
  },
  btn: {
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    fontWeight: 600,
    background: 'linear-gradient(135deg, #222, #555)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
};
