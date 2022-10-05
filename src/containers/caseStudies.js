import React from "react";
import CaseStudies from "../components/case-studies";
import CaseStudy from "../components/Case-Study";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowReturnRight } from "react-icons/bs";

export function Cases() {
  return (
    <CaseStudy>
      <CaseStudy.Row>
        <CaseStudy.Column>
          <CaseStudy.Title>Core Value</CaseStudy.Title>
          <CaseStudy.Text>WE ARE STRATEGY</CaseStudy.Text>
        </CaseStudy.Column>
      </CaseStudy.Row>
      <Row
        style={{
          width: "100vw",
          position: "absolute",
          top: "6896px",
          left: "194px",
        }}
      >
        <Col md={{ span: 2 }} style={{ width: "123px" }}>
          Status:
        </Col>
        <Col md={{ span: 1 }} style={{ marginLeft: "-38px" }}>
          Name:
        </Col>
        <Col md={{ span: 1 }} style={{ marginLeft: "215px" }}>
          Date:
        </Col>
        <Col md={{ span: 1 }} style={{ width: "135px", marginLeft: "355px" }}>
          Practice Areas:
        </Col>
      </Row>
      <CaseStudy.Row style={{ position: "absolute", top: "6925px" }}>
        <CaseStudies />
        <CaseStudies />
        <CaseStudies />
        <CaseStudies />
        <CaseStudies />
        <CaseStudies />
      </CaseStudy.Row>
      <Row style={{ position: "absolute", top: "7283px", left: "196px" }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <BsArrowReturnRight />
          View All Case Studies
        </a>
      </Row>
    </CaseStudy>
  );
}
