import "./moveWithUs.css";

const volunteerDonatePartner = [
  {
    heading: "Be Part of Something Big",
    paragraph:
      "Join us to impact communities and the environment. Your involvement drives positive change.",
    background: "Volunteer.svg",
    buttonText: "Volunteer",
    divert:
      "https://docs.google.com/forms/d/e/1FAIpQLSfYzhJCOQlwyUKGxcaIWOQwMuXKRLsCkI3cH6wZxBndZ46yvw/viewform",
  },
  {
    heading: "Support A Great Course",
    paragraph:
      "Your contribution addresses critical issues like healthcare, education, and environmental conservation. Every bit helps.",
    background: "Donate.svg",
    buttonText: "Donate",
    divert: "none",
  },
  {
    heading: "We Are Open",
    paragraph:
      "Together, we can achieve greater results and foster sustainable development.",
    background: "PartnerWithUs.svg",
    buttonText: "Partner with us",
    divert: "none",
  },
];

function MoveWithUs() {
  return (
    <>
      <div className="MoveWithUsdiv">
        {volunteerDonatePartner.map((innerValue) => {
          const containerStyle = {
            backgroundImage: `url(${innerValue.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          };

          return (
            <>
              <div className="parent">
                <div style={containerStyle} className="background">
                  <div className="child">
                    <h2>{innerValue.heading}</h2>
                    <p>{innerValue.paragraph}</p>
                  </div>
                  <a href={innerValue.divert}>
                    <button>{innerValue.buttonText}</button>
                  </a>
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
