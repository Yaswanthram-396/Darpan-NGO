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

function MoveWithUs() {
  return (
    <>
      <div className="MoveWithUsdiv">
        {volunteerDonatePartner.map((innerValue) => {
          const containerStyle = {
            height: "400px",
            backgroundImage: `url(${innerValue.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          };

          return (
            <>
              <div className="parent">
                <div style={containerStyle} className="background"></div>
                <div className="child">
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
