import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header/header";
import { Cases } from "../containers/caseStudies";
import { FooterContainer } from "../containers/footer";
import { OursServsContainer } from "../containers/OursServsContainer";
import { ServiceContainer } from "../containers/services";
import CarouselContainer from "../containers/CarouselContainer";
import NewsContainer from "../containers/NewsContainer";

export function Home({ show }) {
  return (
    <>
      {!show && (
        <>
          <Header />
          <ServiceContainer />
          <OursServsContainer />
          <Cases />
          <CarouselContainer />
          <NewsContainer />
          <FooterContainer />
        </>
      )}
    </>
  );
}
