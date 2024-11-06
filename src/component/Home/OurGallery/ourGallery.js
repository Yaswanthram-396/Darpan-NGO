import "./ourGallery.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css"; // Your custom styles

// function OurGallery() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 1000,
//     responsive: [
//       {
//         breakpoint: 900, // Below 900px show 2 slides
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       // {
//       //   breakpoint: 700, // Below 700px show 1 slide
//       //   settings: {
//       //     slidesToShow: 1,
//       //     slidesToScroll: 1,
//       //   },
//       // },
//     ],
//   };

//   const galleryItems = [
//     {
//       id: 1,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 2,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 3,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 4,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 5,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 6,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 7,
//       img: "unicefkate_holt.png",
//     },
//     {
//       id: 8,
//       img: "unicefkate_holt.png",
//     },
//   ];
//   return (
//     <div className="photos-container">
//       <div className="CarouselContainer">
//         <h1>
//           Our <span>Gallery</span>
//         </h1>
//       </div>
//       <div className="outer-gallery-container">
//         <div className="slider-container addingSize">
//           <Slider {...settings}>
//             {galleryItems.map((item, idx) => (
//               <div key={idx}>
//                 <img src={item.img} alt={`Slide ${idx + 1}`} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

function OurGallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 700, // Below 900px show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const galleryItems = [
    {
      id: 1,
      img: "JRCT 1 (3).JPG",
    },
    {
      id: 2,
      img: "JRCT 1 (8).JPG",
    },
    {
      id: 3,
      img: "JRCT 1 (10).JPG",
    },
    {
      id: 4,
      img: "JRCT 1 (40).JPG",
    },
    {
      id: 5,
      img: "JRCT 1 (42).jpg",
    },
    {
      id: 6,
      img: "Organdonation@Velangi.JPG",
    },
    {
      id: 7,
      img: "Who we are 1.JPG",
    },
    {
      id: 8,
      img: "Eye camp@Velangi 3.JPG",
    },
  ];

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
                <img
                  className="Slide-Gallery"
                  src={item.img}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurGallery;

// export default OurGallery;
