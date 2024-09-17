// import React, { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
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

// const OurGallery = () => {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     setSlide(slide === Array.length - 1 ? 0 : slide + 1);
//   };

//   const prevSlide = () => {
//     setSlide(slide === 0 ? Array.length - 1 : slide - 1);
//   };

//   return (
// <div className="CarouselContainer">
//   <h1>
//     Our <span>Gallery</span>
//   </h1>
//       <div className="carousel">
//         <BsArrowLeftCircleFill
//           onClick={prevSlide}
//           className="arrow arrow-left"
//         />
//         {Array.map((item, idx) => (
//           <img
//             src={item.img}
//             alt={`Slide ${idx + 1}`}
//             key={idx}
//             className={slide === idx ? "slide" : "slide slide-hidden"}
//           />
//         ))}
//         <BsArrowRightCircleFill
//           onClick={nextSlide}
//           className="arrow arrow-right"
//         />
//         <div className="indicators">
//           {Array.map((_, idx) => (
//             <div
//               key={idx}
//               className={
//                 slide === idx ? "indicator" : "indicator indicator-inactive"
//               }
//               onClick={() => setSlide(idx)}
//             >
//               {" "}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurGallery;

// function OurGallery() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     // speed: 500,
//     // slidesToShow: 1,
//     // slidesToScroll: 1,
//     // dots: true,
//     // infinite: true,
//     slidesToShow: 3, // 3 slides when screen width is 900px and above
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 2000, // 2 second autoplay interval
//     speed: 1000,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {Array.map((item, idx) => (
//           <div>
//             <img src={item.img} alt={`Slide ${idx + 1}`} key={idx} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default OurGallery;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const galleryItems = [
//   {
//     id: 1,
//     img: "unicefkate_holt.png",
//   },
//   {
//     id: 1,
//     img: "unicefkate_holt.png",
//   },
//   {
//     id: 1,
//     img: "unicefkate_holt.png",
//   },
//   {
//     id: 1,
//     img: "unicefkate_holt.png",
//   },
//   // Add more images as needed
// ];

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
          slidesToShow: 5,
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
                {/* Key should be placed on the parent element */}
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
