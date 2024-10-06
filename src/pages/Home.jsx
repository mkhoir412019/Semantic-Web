import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorSection, tutorList } from "../data/TutorSection";
import { partnerSection, partnerList } from "../data/PartnerSection";
import { contactSection } from "../data/ContactSection";
import Tutors from "../components/Tutors";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import parse from "html-react-parser";

import "../Styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* onlinecourse */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
        {/* Tutor */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorSection.content)}</div>
          </div>
          <Tutors tutorList={tutorList} />
        </section>
        {/* Partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnerSection.content)}</div>
          </div>
          <Partner partnerList={partnerList} />
        </section>
        {/* Contact */}
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
