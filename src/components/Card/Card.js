import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <Card key={index}>
          <Card.Img variant="top" src={value.img} alt="cards" />

          <Card.Body>
            <Card.Title>{value.title}</Card.Title>
            <Card.Text>{value.description}</Card.Text>
            <Button>
              Learn More <a to="#" />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Cards;
