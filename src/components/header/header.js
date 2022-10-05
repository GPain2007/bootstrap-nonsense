import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Img1 from "../../images/Kanu_G.png";

function Header() {
  return (
    <Container
      fluid
      style={{
        background: "black",
        height: "897px",
      }}
    >
      <figure className="position-relative">
        <img
          src={Img1}
          alt="head"
          className="img-fluid"
          style={{ marginLeft: "154px", opacity: 0.7 }}
        />

        <Row>
          <Col />
          <Col md="auto" className="title">
            <div style={{ top: "349px" }}>Kanu G. Agabi and Associates</div>
          </Col>
          <Col xs lg="2" />
        </Row>
        <Row>
          <Col />
          <Col md="auto" className="subtitle">
            EXPERTS IN CLASS ACTION
          </Col>
          <Col xs lg="2" />
        </Row>
        <Row>
          <Col />
          <Col md="auto" className="title-two" style={{}}>
            WE ARE RESULTS
          </Col>
          <Col xs lg="2" />
        </Row>
        <Row>
          <Col />
          <Col md="auto" className="scrolldown" style={{}}>
            scroll down
          </Col>
          <Col xs lg="2" />
        </Row>
      </figure>
    </Container>
  );
}
export default Header;
