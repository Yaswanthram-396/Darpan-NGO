import React from "react";
import OurImpactCards from "./ourImpactCards/ourImpactCards";
import { OurImpactCardsInMobileScreens } from "./ourImpactCards/ourImpactCards";
import "./ourImpact.css";

const ContentArray1 = [
  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card1",
    paragraph:
      "Our life-saving programmes in 2022 reached 15 million people in Nigeria",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card2",
    paragraph:
      "We fight hunger, improve agriculture growth and provide nutrition in 36 states in Nigeria",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card3",
    paragraph:
      "We pay our caretakers to manage the properties. They live at the farm are responsible for the success of the crops",
  },
];
const ContentArray2 = [
  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card4",
    paragraph:
      "Repair & maintenance of electricity, machines, tools and structures costs",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card5",
    paragraph:
      "Out of every 1 naira raised, 99% goes towards our charitable activities",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card6",
    paragraph:
      "Our life-saving programmes in 2022 reached 15 million people in Nigeria",
  },
];

const ContentArray3 = [
  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card7",
    paragraph:
      "Our life-saving programmes in 2022 reached 15 million people in Nigeria",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card8",
    paragraph:
      "Our life-saving programmes in 2022 reached 15 million people in Nigeria",
  },

  {
    id: 1,
    heading: "15 MILLION PEOPLE",
    class: "card9",
    paragraph:
      "Our life-saving programmes in 2022 reached 15 million people in Nigeria",
  },
];
let combinedArray = ContentArray1.concat(ContentArray2, ContentArray3);

function CreateOurImpact() {
  return (
    <div className="ourImpactCards">
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
