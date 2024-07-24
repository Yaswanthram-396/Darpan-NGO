import PageCards from "./component/cards/page_cards";
import Whoweare from "./component/WhoWeAre/Whoweare";
import CreateOurImpact from "./component/ourImpact/ourImpact";
import Testimonials from "./component/Testimonials/testimonials";
import MoveWithUs from "./component/moveWithUs/moveWithUs";
import OurGllery from "./component/OurGallery/ourGallery";
import "./App.css";

function App() {
  return (
    <div>
      <PageCards />
      <Whoweare />
      <CreateOurImpact />
      <Testimonials />
      <MoveWithUs />
      <OurGllery />
    </div>
  );
}

export default App;
