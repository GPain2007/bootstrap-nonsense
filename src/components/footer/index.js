import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
  PictureContainer,
  PicImg,
  Address,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.PictureContainer = function FooterPictureContainer({
  children,
  ...restProps
}) {
  return <PictureContainer {...restProps}>{children}</PictureContainer>;
};

Footer.PicImg = function FooterPicImg({ children, ...restProps }) {
  return <PicImg {...restProps}>{children}</PicImg>;
};
Footer.Address = function FooterAddress({ children, ...restProps }) {
  return <Address {...restProps}>{children}</Address>;
};
