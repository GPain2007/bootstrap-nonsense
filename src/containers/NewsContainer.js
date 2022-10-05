import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import { BsArrowReturnRight } from "react-icons/bs";
import IMG1 from "../images/Img1.png";
import IMG2 from "../images/Img2.png";

function NewsContainer() {
  return (
    <Container style={{ height: "1200px" }}>
      <Row>
        <h1 style={{ fontSize: "30px", fontWeight: "700" }}>NEWS & ARTICLES</h1>
      </Row>
      <Row className="d-line">
        <Card style={{ marginLeft: "0px", margin: "90px", border: "none" }}>
          <Card.Img variant="top" src={IMG1} />
          <Card.Body style={{ padding: "0" }}>
            <Card.Title
              style={{
                width: "386px",
                padding: "0",
                marginTop: "125px",
                marginBottom: "35px",
              }}
            >
              CAR INSUARNCE TOTAL LOSS CLAIMS
            </Card.Title>
            <Card.Subtitle
              style={{
                marginBottom: "35px",
                color: "#D2B202",
                fontSize: "15px",
              }}
            >
              News & Articles By Edmund Normand
            </Card.Subtitle>
            <Card.Text>
              Did you wreck your car and did your insurance company pay you for
              the total loss? We believe that consumers have been cheated out of
              thousands of dollars by car insurance companies.
            </Card.Text>
            <a href="#" style={{ textDecoration: "none" }}>
              <BsArrowReturnRight />
              READ THE POST
            </a>
          </Card.Body>
        </Card>

        <Card style={{ marginLeft: "0px", margin: "90px", border: "none" }}>
          <Card.Img variant="top" src={IMG2} />
          <Card.Body style={{ padding: "0" }}>
            <Card.Title
              style={{
                width: "386px",
                padding: "0",
                marginTop: "125px",
                marginBottom: "35px",
              }}
            >
              CAR INSUARNCE TOTAL LOSS CLAIMS
            </Card.Title>
            <Card.Subtitle
              style={{
                marginBottom: "35px",
                color: "#D2B202",
                fontSize: "15px",
              }}
            >
              News & Articles By Edmund Normand
            </Card.Subtitle>
            <Card.Text>
              Did you wreck your car and did your insurance company pay you for
              the total loss? We believe that consumers have been cheated out of
              thousands of dollars by car insurance companies.
            </Card.Text>
            <a
              href="#"
              style={{ textDecoration: "none", textDecorationColor: "none" }}
            >
              <BsArrowReturnRight />
              READ THE POST
            </a>
          </Card.Body>
        </Card>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default NewsContainer;
