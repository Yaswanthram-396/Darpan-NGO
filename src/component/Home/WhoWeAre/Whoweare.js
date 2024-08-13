import { useState } from "react";
import React from "react";
import "./whoweare.css";
import PropTypes from "prop-types";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoSrc: PropTypes.string.isRequired,
};
// App.js

function Whoweare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleAnchorClick = (e, src) => {
    e.preventDefault();
    const embedSrc = src.replace("watch?v=", "embed/");
    setVideoSrc(embedSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <>
      <div className="outer">
        <img className="cutter" src="/Subtractofz-index3.png" alt="reload" />
        <img className="innerCutter" src="childblack&white.svg" alt="reload" />
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
                Jana Raksha Swachanda Seva Samstha is a dedicated nonprofit
                organization committed to fostering positive change in our
                communities. Established in 2013, our organization initially
                focused solely on blood donation. Over the years, we have
                expanded our mission to address critical areas such as education
                and literacy, environment and forests, health and family
                welfare, tribal affairs, and skill development.
              </p>
            </li>
            {/* <li>
              <p>
                We commit ourself to helping families in the poor communities,
                the marginalized and underprivileged to improve their lives and
                achieve lasting victory against poverty.
              </p>
            </li> */}
            {/* </ul> */}
          </div>
          <div className="buttonsInWhoWeAre">
            <button>Know More</button>
            <div className="watchAVideo">
              <div className="App">
                <a
                  href="https://www.youtube.com/watch?v=VUmz7xVMqOc"
                  onClick={(e) =>
                    handleAnchorClick(
                      e,
                      "https://www.youtube.com/watch?v=VUmz7xVMqOc"
                    )
                  }
                >
                  <div className="video-button">
                    {" "}
                    <img src="Group 18.png" alt="reload" /> <p>Watch a Video</p>
                  </div>
                </a>
                <VideoModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  videoSrc={videoSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Whoweare;