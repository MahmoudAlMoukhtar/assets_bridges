import React from "react";
import NavBar from "../../common/NavBar";
import HeroSection from "../../components/HeroSection";
import BriefSection from "../../components/BriefSection";
import BriefSection2 from "../../components/BriefSection2";
import AddedValues from "../../components/AddedValues";
import OurTeam from "../../components/OurTeam";
import OurProjects from "../../components/OurProjects";
import ContactUs from "../../components/ContactUs";
import ServiceRequestSection from "../../components/ServiceRequestSection";
const Home = ({navBarModal, setNavBarModal}) => {
  return (
    <div className="w-full">
      <div
        id="hero_section"
        className="flex flex-col w-full sm:min-h-screen overflow-hidden items-center pb-6"
      >
        <NavBar navBarModal={navBarModal} setNavBarModal={setNavBarModal} />
        <HeroSection />
      </div>
      <BriefSection
        dir="rtl"
        sectionNum="01"
        image="ithra-building-in-saudi-arabia-2023-02-23-21-04-41-utc-1 (1).webp"
        title="من نحن؟"
      />
      <BriefSection2 />
      <AddedValues />
      <OurTeam />
      <OurProjects />

      <ServiceRequestSection />
      <ContactUs />
    </div>
  );
};

export default Home;
/* 
<ServiceRequest />
*/
