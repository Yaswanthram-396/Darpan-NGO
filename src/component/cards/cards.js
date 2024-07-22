import React from "react";
import "./cards.css";

function Card({ array }) {
  const output = array.map((element) => (
    <>
      <div className={element.className}>
        <div className="image">
          <img src={element.imgUrl} alt="reload" />
        </div>
        <h1>{element.heading}</h1>
        <p>{element.paragraph}</p>
      </div>
    </>
  ));
  return output;
}
export default Card;
