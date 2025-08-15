// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/esm/Container';

// export default function ModalUpdate({ show, onHide, editHandler, clock }) {
//   return (
//     <Modal
//       show={show}
//       onHide={onHide} // закрытие по крестику или клику вне окна
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Container>
//         <Form onSubmit={(e) => editHandler(e, clock.id)}>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               name="name"
//               type="text"
//               placeholder="Name clock"
//               defaultValue={clock?.name}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               name="image"
//               type="text"
//               placeholder="link to photo"
//               defaultValue={clock?.image}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               name="description"
//               type="text"
//               placeholder="Description"
//               defaultValue={clock?.description}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Сохранить
//           </Button>{' '}
//           <Button variant="secondary" type="button" onClick={onHide}>
//             Отменить
//           </Button>
//         </Form>
//       </Container>
//     </Modal>
//   );
// }
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default function ModalUpdate({ show, onHide, editHandler, clock }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={styles.modal}
    >
      <Container style={styles.container}>
        <Form onSubmit={(e) => editHandler(e, clock.id)} style={styles.form}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name clock"
              defaultValue={clock?.name}
              style={styles.input}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Image</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="link to photo"
              defaultValue={clock?.image}
              style={styles.input}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Description"
              defaultValue={clock?.description}
              style={styles.input}
            />
          </Form.Group>
          <div style={styles.btnWrapper}>
            <Button variant="primary" type="submit" style={styles.btn}>
              Сохранить
            </Button>{' '}
            <Button variant="secondary" type="button" onClick={onHide} style={styles.btn}>
              Отменить
            </Button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
}

const styles = {
  modal: {
    fontFamily: "'Cinzel', serif",
    background: 'linear-gradient(145deg, #fff, #f0f0f0)',
    borderRadius: '1rem',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    padding: '1rem',
  },
  container: {
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 600,
    fontSize: '1.1rem',
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
  btnWrapper: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  btn: {
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    fontWeight: 600,
    background: 'linear-gradient(135deg, #222, #555)',
    border: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
};
