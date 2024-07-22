import React from "react";
import "./whoweare.css";

function Whoweare() {
  return (
    <>
      <div className="outer">
        <img className="cutter" src="/Subtractofz-index3.png" alt="reload" />
        <img
          className="innerCutter"
          src="https://aswa4u.org/Images/celebrationsBannerChildren.png"
          alt="reload"
        />
        {/* </div> */}
        <div className="whoWeAreContainer">
          <div>
            <li>
              <h1 className="whoWeAreHead">
                <span>Who </span>
                We Are
              </h1>
            </li>
            <li>
              <p>
                {" "}
                A non-profit and non-Governmental Organization founded in 2022
                to promote sustainable agriculture, improve nutrition, end world
                hunger and achieve food security.
              </p>
            </li>
            <li>
              <p>
                We commit ourself to helping families in the poor communities,
                the marginalized and underprivileged to improve their lives and
                achieve lasting victory against poverty.
              </p>
            </li>
            {/* </ul> */}
          </div>
          <div className="buttonsInWhoWeAre">
            <button>Know More</button>
            <div className="watchAVideo">
              <img src="Group 18.png" alt="reload" />
              <p> Watch a Video</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Whoweare;
