import PageCards from "./ourProjects/ourProjects";
import Whoweare from "./WhoWeAre/Whoweare";
import CreateOurImpact from "./ourImpact/ourImpact";
import Testimonials from "./Testimonials/testimonials";
import MoveWithUs from "./moveWithUs/moveWithUs";
import OurGallery from "./OurGallery/ourGallery";
import CarouselPage from "./coursel/coursel";
import Footerpage from "../Footer/footer";
// import HealthAndfamily from "../Health&familypage";
import Navbar from "./Navbar/Navbar";

// import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function Home() {
  return (
    <div className="App">
      <Navbar />
      {/* <HealthAndfamily /> */}
      <CarouselPage />
      <PageCards />
      <Whoweare />
      <CreateOurImpact />
      <Testimonials />
      <MoveWithUs />
      <OurGallery />
      <Footerpage />
    </div>
  );
}
export default Home;
