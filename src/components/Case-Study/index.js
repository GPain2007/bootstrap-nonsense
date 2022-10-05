import React from "react";
import { Row, Container, Column, Title, Text } from "./styles/Case-Study";

export default function CaseStudy({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CaseStudy.Row = function CaseStudyRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

CaseStudy.Column = function CaseStudyColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

CaseStudy.Title = function CaseStudyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

CaseStudy.Text = function CaseStudyText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
