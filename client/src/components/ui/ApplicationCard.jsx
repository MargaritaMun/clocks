import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ApplicationCard({ application }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{application.userName}</Card.Title>
          <Card.Text>{application.phoneNumber}</Card.Text>
          <Card.Text>{application.description}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={application.image} />
      </Card>
    </div>
  );
}
