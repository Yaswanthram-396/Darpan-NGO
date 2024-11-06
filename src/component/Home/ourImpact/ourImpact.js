import React from "react";
import OurImpactCards from "./ourImpactCards/ourImpactCards";
import { OurImpactCardsInMobileScreens } from "./ourImpactCards/ourImpactCards";
import "./ourImpact.css";

const ContentArray1 = [
  {
    id: 1,
    heading: "1,200 People Helped",
    class: "top-left-card",
    paragraph:
      " In the areas of education and skill development, providing access to quality learning opportunities.",
  },

  {
    id: 1,
    heading: "850 People Supported",
    class: "top-center-card",
    paragraph:
      "Focused on tribal affairs, empowering indigenous communities with resources and education.",
  },

  {
    id: 1,
    heading: "2,300 Lives Impacted",
    class: "top-right-card",
    paragraph:
      "Through environmental initiatives, promoting sustainability and protecting local ecosystems.",
  },
];
const ContentArray2 = [
  {
    id: 1,
    heading: " 1,500 Families Assisted",
    class: "middle-left-card",
    paragraph:
      "In health and family welfare, improving access to healthcare and maternal care services",
  },

  {
    id: 1,
    heading: "980 Students Benefited",
    class: "middle-center-card",
    paragraph:
      " Through educational programs, enabling access to scholarships and digital learning platforms.",
  },

  {
    id: 1,
    heading: "700 Villagers Empowered",
    class: "middle-right-card",
    paragraph:
      " In tribal affairs, providing infrastructure and cultural preservation efforts.",
  },
];

const ContentArray3 = [
  {
    id: 1,
    heading: "1,600 Citizens Engaged",
    class: "bottom-left-card",
    paragraph:
      " In environmental awareness campaigns, promoting eco-friendly practices and waste management.",
  },

  {
    id: 1,
    heading: "2,000 Women Supported",
    class: "bottom-center-card",
    paragraph:
      " In health and family welfare, enhancing women's access to healthcare, prenatal care, and nutrition.",
  },

  {
    id: 1,
    heading: "1,050 People Uplifted",
    class: "bottom-right-card",
    paragraph:
      "Focused on education, providing tools and resources for remote learning in underserved communities.",
  },
];
let combinedArray = ContentArray1.concat(ContentArray2, ContentArray3);

function CreateOurImpact() {
  return (
    <div className="ourImpactCards" id="Our-Impact">
      <h1>
        What <span>We</span> Do?
      </h1>
      <div className="ourImpactMap">
        <img className="mapImg" src="Rectangle 386 (1).png" alt="reload" />
        <div className="row-1-Ourimpact">
          <OurImpactCards array={ContentArray1} />
        </div>

        <div className="row-2-Ourimpact">
          <OurImpactCards array={ContentArray2} />
        </div>
        <div className="row-3-Ourimpact">
          <OurImpactCards array={ContentArray3} />
        </div>
        <div className="cards-ourImpact-mobile">
          <OurImpactCardsInMobileScreens arrayForMobiles={combinedArray} />
        </div>
      </div>
    </div>
  );
}

export default CreateOurImpact;
