import PageCards from "./ourProjects/ourProjects";
import Whoweare from "./WhoWeAre/Whoweare";
import CreateOurImpact from "./ourImpact/ourImpact";
import Testimonials from "./Testimonials/testimonials";
import MoveWithUs from "./moveWithUs/moveWithUs";
import OurGallery from "./OurGallery/ourGallery";
import CarouselPage from "./coursel/coursel";
import "./index.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBloodDonation, setShowBloodDonation] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBloodDonation(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.75,
      }
    );

    if (carousel) {
      observer.observe(carousel);
    }

    return () => {
      if (carousel) {
        observer.unobserve(carousel);
      }
    };
  }, []);

  return (
    <div className="App">
      <CarouselPage />
      <PageCards />
      <Whoweare />
      <CreateOurImpact />
      <Testimonials />
      <MoveWithUs />
      <OurGallery />
      <div className="blood-donation-container">
        <div
          className={`bloodDonation ${showBloodDonation ? "show" : ""}`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a href="https://forms.gle/E2w85HUgGKsb8ZHF6">
            <img
              src={!showTooltip ? "love (1).svg" : "love-show.svg"}
              alt="Donate"
            />
          </a>
        </div>
        <div className={`tooltip ${showTooltip ? "show" : ""}`}>
          <p>Donate Blood</p>
        </div>
      </div>
    </div>
  );
}
