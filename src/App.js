import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import HealthAndfamily from "./component/Health&familypage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Home/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnvironmentPage from "./component/Environment";
import EducationPage from "./component/Education";
import TribalPage from "./component/TribalCommunities";
import AboutUs from "./component/AboutUS";
import Footerpage from "./component/Footer/footer";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Health&Familypage" element={<HealthAndfamily />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="/Environment" element={<EnvironmentPage />}></Route>
          <Route path="/TribalCommunities" element={<TribalPage />}></Route>
          <Route path="/WhoWeAre" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footerpage />
      </Router>
    </>
  );
}

export default App;
