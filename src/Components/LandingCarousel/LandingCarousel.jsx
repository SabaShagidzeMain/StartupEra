import React from "react";
import "./style.css";
import Slider from "react-slick";

import Dr1 from "/public/Illustrations/Dr1.png";
import Dr2 from "/public/Illustrations/Dr2.png";
import Dr3 from "/public/Illustrations/Dr3.png";
import Dr4 from "/public/Illustrations/Dr4.png";
import Dr5 from "/public/Illustrations/Dr5.png";
import Dr6 from "/public/Illustrations/Dr6.png";
import Dr7 from "/public/Illustrations/Dr7.png";

const illustrations = [
  Dr1,
  Dr2,
  Dr3,
  Dr4,
  Dr5,
  Dr6,
  Dr7,
];

const LandingCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        autoplay: true,
        autoplaySpeed: 2000,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {illustrations.map((src, i) => (
          <div className="carousel-item" key={i}>
            <img src={src} alt={`Illustration ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LandingCarousel;
