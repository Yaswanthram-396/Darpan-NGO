import "./testimonials.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsArray = [
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveSlide(newIndex);
  };

  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // 3 slides when screen width is 900px and above
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 second autoplay interval
    speed: 1000,
    centerMode: true, // Center mode enabled for larger screens
    beforeChange: handleBeforeChange,
    centerPadding: "0px", // No extra padding around the center slide

    responsive: [
      {
        // From 900px to 1024px
        breakpoint: 1024,
        settings: {
          centerMode: false, // Disable center mode below 1024px
          slidesToShow: 2, // Show 2 slides between 900px and 1024px
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        // From 600px to 900px
        breakpoint: 900,
        settings: {
          centerMode: false, // Disable center mode below 900px
          slidesToShow: 2, // Show 2 slides between 600px and 900px
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        // Below 600px
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1, // Show 1 slide for very small screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ourCoreTeam">
      <div className="heading">
        <h1>
          Our <span>Core</span> Team
        </h1>
      </div>
      <div className="innerContainer">
        <div className="slider-container">
          <Slider {...settings}>
            {TestimonialsArray.map((eachPerson, index) => (
              <div
                className={`${eachPerson.class} ${
                  index === activeSlide ? "active-slide" : ""
                }`}
                key={index}
              >
                <img
                  src="Rectangle 411.png"
                  alt={`Reload, ${eachPerson.name}!`}
                />
                <h2>{eachPerson.name}</h2>
                <p>{eachPerson.role}</p>
                <p>{eachPerson.about}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
