// import React, { useState } from 'react';
// import './coursel.css'; // Create this CSS file for styling

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={prevSlide} className="carousel-button">
//         &lt;
//       </button>
//       <div className="carousel-content">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <button onClick={nextSlide} className="carousel-button">
//         &gt;
//       </button>
//     </div>
//   );
// };






// export default Carousel;

import React, { useState } from 'react';
import './coursel.css'; // Corrected the file name spelling to match import

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button">
        &lt;
      </button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
