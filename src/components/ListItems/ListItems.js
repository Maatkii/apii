import React from "react";
import Card from "react-bootstrap/Card";

const ListItems = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "25rem", color: "grey" }}>
        <Card.Body>
          <Card.Title>{user.id}</Card.Title>
          <Card.Title>{user.name}</Card.Title>
          <Card.Title>{user.username}</Card.Title>
          <Card.Title>{user.email}</Card.Title>
          <Card.Title>{user.phone}</Card.Title>
          <Card.Title>{user.website}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItems;
