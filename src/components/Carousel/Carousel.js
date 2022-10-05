import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import KanuO from "../../images/KanuO.png";
import KanuG from "../../images/Kanu_G.png";
import BusO from "../../images/BusO.png";

function PicCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-black">
        <img
          className="d-block w-50 h-50"
          style={{ maxHeight: "1345px", marginLeft: "314px" }}
          src={KanuO}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 h-50"
          src={KanuG}
          style={{
            maxHeight: "1345px",
            backgroundColor: "black",
            marginLeft: "314px",
          }}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 h-50 "
          src={BusO}
          style={{ maxHeight: "1345px", marginLeft: "314px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PicCarousel;
