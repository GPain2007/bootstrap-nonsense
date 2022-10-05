import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PicCarousel from "../components/Carousel/Carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

function CarouselContainer() {
  return (
    <Container style={{ height: "1500px" }}>
      <Row>
        <h1
          style={{ lineHeight: "300px", fontSize: "64px", fontWeight: "500" }}
        >
          Meet Our Team Members
        </h1>
      </Row>
      <Row>
        <PicCarousel />
      </Row>
      <Row>
        <Col />
        <Col />
        <Col>
          <Button className="md-2" size="lg" style={{ marginTop: "62px" }}>
            See More <AiOutlineArrowRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselContainer;
