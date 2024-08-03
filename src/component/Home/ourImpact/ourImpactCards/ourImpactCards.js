import React from "react";
import "./ourImpactCards.css";

export default function OurImpactCards({ array }) {
  return array.map((item) => (
    <div className={item.class} key={item.id}>
      <h2>{item.heading}</h2>

      <p1>{item.paragraph}</p1>
    </div>
  ));
}
export function OurImpactCardsInMobileScreens({ arrayForMobiles }) {
  return arrayForMobiles.map((item) => (
    <div className={item.class} key={item.id}>
      <h2>{item.heading}</h2>

      <p1>{item.paragraph}</p1>
    </div>
  ));
}
