import "./ourGallery.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryItems = [
  {
    id: 1,
    img: "unicefkate_holt.png",
  },
  {
    id: 2,
    img: "unicefkate_holt.png",
  },
  {
    id: 3,
    img: "unicefkate_holt.png",
  },
  {
    id: 4,
    img: "unicefkate_holt.png",
  },
  {
    id: 5,
    img: "unicefkate_holt.png",
  },
  {
    id: 6,
    img: "unicefkate_holt.png",
  },
  {
    id: 7,
    img: "unicefkate_holt.png",
  },
  {
    id: 8,
    img: "unicefkate_holt.png",
  },
];

function OurGallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // 2-second autoplay interval
    speed: 1000,
    responsive: [
      {
        breakpoint: 900, // Below 900px show 2 cards
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700, // Below 700px show 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="photos-container">
      <div className="CarouselContainer">
        <h1>
          Our <span>Gallery</span>
        </h1>
      </div>
      <div className="outer-gallery-container">
        <div className="slider-container addingSize">
          <Slider {...settings}>
            {galleryItems.map((item, idx) => (
              <div key={idx}>
                {" "}
                <img src={item.img} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurGallery;
