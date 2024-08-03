import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ourGallery.css";

const Array = [
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

const OurGallery = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === Array.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? Array.length - 1 : slide - 1);
  };

  return (
    <div className="CarouselContainer">
      <h1>
        Our <span>Gallery</span>
      </h1>
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {Array.map((item, idx) => (
          <img
            src={item.img}
            alt={`Slide ${idx + 1}`}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <div className="indicators">
          {Array.map((_, idx) => (
            <div
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            >
              {" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
