import { useState } from "react";

import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import ClinicalConcerns from "./Pages/ClinicalConcerns/ClinicalConcerns";
import Locations from "./Pages/DiscoverLocations/Locations";
import TeamSection from "./Pages/TeamSection/TeamSection";
import TrendingTreatments from "./Pages/TrendingTreatments/TrendingTreatments";
import WhyChooseSection from "./Pages/WhyChooseSection/WhyChooseSection";
import BlogSlider from "./Pages/BlogSlider/BlogSlider";
import FAQSection from "./Pages/FAQSection/FAQSection";
import HappyClients from "./Pages/HappyClients/HappyClients";
import FirstStep from "./Pages/FirstStep/FirstStep";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsHero from "./Pages/AboutUs/HeroSection/AboutUsHero";
import OurValue from "./Pages/AboutUs/OurValue/OurValue";
import OurTeam from "./Pages/AboutUs/OurTeam/OurTeam";
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ClinicalConcerns />
                <Locations />
                <TeamSection />
                <TrendingTreatments />
                <WhyChooseSection />
                <BlogSlider />
                <FAQSection />
                <HappyClients />
                <FirstStep />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUsHero />
                <OurValue />
                <OurTeam />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
