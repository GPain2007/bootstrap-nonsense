import React from "react";
import {
  Row,
  Container,
  Column,
  Title,
  Text,
  SubContainer,
  SubText,
  SubTitle,
} from "./styles/services";

export default function Service({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Service.Row = function ServiceRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Service.Column = function ServiceColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Service.Title = function ServiceTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Service.Text = function ServiceText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Service.SubContainer = function ServiceSubContainer({
  children,
  ...restProps
}) {
  return <SubContainer {...restProps}>{children}</SubContainer>;
};

Service.SubText = function ServiceSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Service.SubTitle = function ServiceSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
