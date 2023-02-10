
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionSkills from "views/index-sections/SectionSkills.js";
import SectionTimeline from "./index-sections/SectionTimeline";
import SectionNotes from "views/index-sections/SectionNotes.js"
import LoginPages from "views/LoginPage.js";
import AboutUs from "views/index-sections/AboutUs.js"

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <AboutUs/>
        <SectionTimeline />
        <SectionSkills />
        {/* <SectionJavaScript/>
        <LoginPages/> */}
        {/* <SectionNotes /> */}
        <SectionCarousel />
        <Footer />
      </div>
    </>
  );
}

export default Index;
