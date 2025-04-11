import React from "react";
import "./style.css";
import Slider from "react-slick";

const illustrations = [
  "/public/Illustrations/Dr1.png",
  "/public/Illustrations/Dr2.png",
  "/public/Illustrations/Dr3.png",
  "/public/Illustrations/Dr4.png",
  "/public/Illustrations/Dr5.png",
  "/public/Illustrations/Dr6.png",
  "/public/Illustrations/Dr7.png",
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
