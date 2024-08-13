import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import HealthAndfamily from "./component/Health&familypage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Home/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   function ScrollToTop() {
//     const { pathname } = useLocation();

//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
//   }

//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Health&Familypage" element={<HealthAndfamily />} />
//         <Route element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import HealthAndFamily from "./HealthAndFamily";
import EducationPage from "./component/Education";
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
      <Navbar />
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Health&Familypage" element={<HealthAndfamily />} />
          <Route path="/Education" element={<EducationPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
