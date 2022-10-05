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
  Button,
} from "./styles/OurServs";

export default function OurServs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OurServs.Row = function OurServsRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

OurServs.Column = function OurServsColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

OurServs.Title = function OurServsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

OurServs.Text = function OurServsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OurServs.SubContainer = function OurServsSubContainer({
  children,
  ...restProps
}) {
  return <SubContainer {...restProps}>{children}</SubContainer>;
};

OurServs.SubTitle = function OurServsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

OurServs.SubText = function OurServsSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

OurServs.Button = function OurServsButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
