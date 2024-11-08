import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./coursel.css";
import { Link } from "react-router-dom";

function CarouselPage() {
  return (
    <div>
      <Carousel interval={1600}>
        <Carousel.Item>
          <div
            className="slide"
            style={{
              backgroundImage: `linear-gradient(91deg, #000 -6.51%, rgba(78, 110, 89, 0.60) 74.31%, rgba(73, 104, 83, 0.35) 80.53%, rgba(65, 95, 74, 0.00) 89.14%) , url("EducationSlide.jpeg")`,
              position: "relative",
            }}
          >
            <Carousel.Caption>
              <div className="slide-upper-text">
                <h1>Education for All, A Future for Everyone.</h1>
                <h3>
                  Be a part of the movement to make education accessible for
                  all. Whether through donations, volunteering, or spreading
                  awareness, your contribution can help change lives.
                </h3>
                <Link to="/Education" className="linked">
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#ce7c02",
                      color: "#000",
                    }}
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slide"
            style={{
              backgroundImage: `linear-gradient(94deg, #000 -6.64%, rgba(102, 102, 102, 0.30) 59.93%, rgba(212, 212, 212, 0.00) 87.56%) ,url("environmentNoBlack.png")`,
              position: "relative",
            }}
          >
            <Carousel.Caption>
              <div className="slide-upper-text">
                <h1>Be the Change for Embrace Sustainability</h1>
                <h3>
                  Imagine a world where every person takes responsibility for
                  their environmental impact. It’s possible, and it starts with
                  you.
                </h3>
                <Link to="/Environment" className="linked">
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#ce7c02",
                      color: "#000",
                    }}
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slide"
            style={{
              backgroundImage: `linear-gradient(90deg, #000 -12.95%, rgba(19, 33, 37, 0.92) -1.52%, rgba(96, 165, 185, 0.60) 22.63%, rgba(130, 187, 204, 0.00) 30.26%), url("familySlide.jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Carousel.Caption>
              <div className="slide-upper-text">
                <h1>Creating Connections Across Cultures</h1>
                <h3>
                  Join Us in Celebrating Diversity" "Become a part of our
                  mission to build bridges between cultures..
                </h3>
                <Link to="/TribalCommunities" className="linked">
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#ce7c02",
                      color: "#000",
                    }}
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
            {/* <div className="slide-gradient"></div> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slide"
            style={{
              backgroundImage: `linear-gradient(91deg, #000 -5.86%, rgba(15, 25, 28, 0.91) 3.51%, rgba(96, 165, 185, 0.42) 51.03%, rgba(130, 187, 204, 0.00) 67.18%) , url("HealthSlide.jpeg")`,
            }}
          >
            <Carousel.Caption>
              <div className="slide-upper-text">
                <h1>Be the reason someone smiles today.</h1>
                <h3>
                  Every donation has the power to save a life, change a future,
                  and spread kindness far and wide. Your small act of giving can
                  make a big difference in the world.
                </h3>
                <Link to="/Health&Familypage" className="linked">
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#ce7c02",
                      color: "#000",
                    }}
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
