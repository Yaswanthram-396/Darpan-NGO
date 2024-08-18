import PageCards from "./ourProjects/ourProjects";
import Whoweare from "./WhoWeAre/Whoweare";
import CreateOurImpact from "./ourImpact/ourImpact";
import Testimonials from "./Testimonials/testimonials";
import MoveWithUs from "./moveWithUs/moveWithUs";
import OurGallery from "./OurGallery/ourGallery";
import CarouselPage from "./coursel/coursel";
import "./index.css";

function Home() {
  return (
    <div className="App">
      {/* <HealthAndfamily /> */}
      <CarouselPage />
      <PageCards />
      <Whoweare />
      <CreateOurImpact />
      <Testimonials />
      <MoveWithUs />
      <OurGallery />
    </div>
  );
}
export default Home;
