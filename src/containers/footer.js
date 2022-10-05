import React from "react";
import { Footer } from "../components";
import { PicImg, PictureContainer } from "../components/footer/styles/footer";
import { BsArrowRightCircle } from "react-icons/bs";
import img1 from "../images/logo_KGA2.png";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Row>
        <Footer.Title>Kanu G. Agabi and Associates</Footer.Title>
        <Footer.Column />
        <Footer.Column />
        <Footer.Address>Our People</Footer.Address>
        <Footer.Column />
        <Footer.Address>Careers</Footer.Address>
        <Footer.Column />

        <Footer.Address>
          <BsArrowRightCircle />
          Payment
        </Footer.Address>
      </Footer.Row>
      <Footer.Row>
        <Footer.Title> </Footer.Title>
        <Footer.Column />
        <Footer.Column />
        <Footer.Address>Our Firm</Footer.Address>
        <Footer.Column />
        <Footer.Address>Insights</Footer.Address>
      </Footer.Row>
      <Footer.Row>
        <Footer.Title> </Footer.Title>
        <Footer.Column />
        <Footer.Column />
        <Footer.Address>Our Services</Footer.Address>
        <Footer.Column />
        <Footer.Address>Contact Us</Footer.Address>
      </Footer.Row>
      <Footer.Break />
      <Footer.Row />

      <Footer.Row>
        <Footer.Title> </Footer.Title>
        <Footer.Column />
        <Footer.Column />

        <Footer.Column>
          <Footer.Address>Abuja (Head Office)</Footer.Address>
          <Footer.Text>
            TRINITY HOUSE: PLOT 943, CADASTRAL ZONE B06,
            <br />
            (BEHIND FEDERAL MINISTRY OF WORK & HOUSING),
            <br /> MABUSHI DISTRICT, ABUJA.
          </Footer.Text>
        </Footer.Column>
        <Footer.Column />
        <Footer.Column>
          <Footer.Address>Lagos Office</Footer.Address>
          <Footer.Text>
            44 lASODE CRESCENT, OFF OZUMBA MBADIWE, <br />
            BY MOBILE OFFICE, <br />
            VICTORIA ISLAND, LAGOS.{" "}
          </Footer.Text>
        </Footer.Column>
        <Footer.Column />
        <Footer.Column>
          <Footer.Address>Twitter</Footer.Address>
          <Footer.Address>LinkedIn</Footer.Address>
          <Footer.Address>Instagram</Footer.Address>
          <Footer.Address>Facebook</Footer.Address>
        </Footer.Column>
      </Footer.Row>

      <Footer.Row>
        <PictureContainer>
          <PicImg src={img1} alt="logo" />
        </PictureContainer>
        <Footer.Column />
        <Footer.Column />

        <Footer.Column>
          <Footer.Address>Calabar Office</Footer.Address>
          <Footer.Text>
            1 EDET EYO CRESCENT,
            <br />
            OFF NDIDEM USANG ISO ROAD, <br />
            MARIAN ROAD.
          </Footer.Text>
        </Footer.Column>
        <Footer.Column />
        <Footer.Column>
          <Footer.Address>Uyo Office</Footer.Address>
          <Footer.Text>
            NO. 86, ATIKU ABUBAKAR AVENUE, <br />
            UYO, AKWA IBOM STATE.
          </Footer.Text>
        </Footer.Column>
        <Footer.Column />
      </Footer.Row>
      <Footer.Break />
    </Footer>
  );
}
