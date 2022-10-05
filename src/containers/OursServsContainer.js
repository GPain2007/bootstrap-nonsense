import React from "react";
import { OurServs } from "../components";
import Cards from "../components/Card/Card";
import CardData from "../components/Card/cardData";

export function OursServsContainer() {
  return (
    <>
      <OurServs>
        <OurServs.SubContainer>
          <OurServs.Title>Our Services</OurServs.Title>
          <OurServs.Text>29 Practice Areas</OurServs.Text>
          <OurServs.Button>See All</OurServs.Button>
        </OurServs.SubContainer>
        <OurServs.Row>
          <OurServs.Column>
            <OurServs.SubTitle>WE ARE CLASS ACTION</OurServs.SubTitle>
            <OurServs.SubText>
              Kanu G. Agabi & Associates is a multidisciplinary law firm that
              serves a wide range of clients. With 50 years of experience, we
              are able to provide the proficiency necessary to help our clients
              resolve and navigate their complex legal issues
            </OurServs.SubText>
          </OurServs.Column>
        </OurServs.Row>
        <Cards details={CardData} />
      </OurServs>
    </>
  );
}
