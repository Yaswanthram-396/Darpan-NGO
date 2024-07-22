import "./erfdmoveWithUs.css";

const volunteerDonatePartner = [
  {
    heading: "Be Part of Something Big",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    background: "Volunteer.png",
    buttonText: "Volunteer",
  },
  {
    heading: "Support A Great Course",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    background: "Donate.png",
    buttonText: "Donate",
  },
  {
    heading: "We Are Open",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    background: "partnerWithUs.png",
    buttonText: "Partner with us",
  },
];
// import React from "react";

// const MoveWithUs = () => {
//   const innerValue = {
//     background: "partnerWithUs.png", // Replace with your image URL
//   };

//   const containerStyle = {
//     position: "relative",
//     width: "300px", // Adjust the width as needed
//     height: "400px", // Adjust the height as needed
//     backgroundImage: `url(${innerValue.background})`,
//     backgroundSize: "cover", // Cover the entire container
//     backgroundPosition: "center", // Center the image
//     borderRadius: "10px", // Optional: add border-radius for rounded corners
//     overflow: "hidden", // Ensure the overlay fits within the container
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "white", // Ensure the text is readable
//     padding: "20px",
//     textAlign: "center",
//   };

//   const buttonStyle = {
//     backgroundColor: "#ff9900", // Button background color
//     border: "none",
//     color: "white",
//     padding: "10px 20px",
//     textAlign: "center",
//     textDecoration: "none",
//     display: "inline-block",
//     fontSize: "16px",
//     margin: "10px 0",
//     cursor: "pointer",
//     borderRadius: "5px",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={overlayStyle}>
//         <h2>Be Part of Something Big</h2>
//         <p>Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.</p>
//         <button style={buttonStyle}>Volunteer</button>
//       </div>
//     </div>
//   );
// };

// export default MoveWithUs;

function MoveWithUs() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "400px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "white",
    padding: "20px",
    textAlign: "left",
  };

  return (
    <>
      {" "}
      <div className="MoveWithUsdiv">
        {volunteerDonatePartner.map((innerValue) => {
          const containerStyle = {
            position: "relative",
            width: "400px", // Adjust the width as needed
            height: "365px", // Adjust the height as needed
            backgroundImage: `url(${innerValue.background})`,
            backgroundSize: "cover", // Cover the entire container
            backgroundPosition: "center", // Center the image
            borderRadius: "10px", // Optional: add border-radius for rounded corners
            overflow: "hidden", // Ensure the overlay fits within the container
            filter: "brightness(70%)",
          };

          return (
            <>
              <div
                style={containerStyle}
                //   className="moveWithUs"
              >
                <div style={overlayStyle}>
                  <h1>{innerValue.heading}</h1>
                  <p>{innerValue.paragraph}</p>
                  <button>{innerValue.buttonText}</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MoveWithUs;
