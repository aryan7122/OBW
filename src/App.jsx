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
import MissionVision from "./Pages/AboutUs/MissionVision/MissionVision";
import LocationSection from "./Pages/AboutUs/LocationSection/LocationSection";
import ContactForm from "./Pages/AboutUs/ContactForm/ContactForm";
import Blog from "./Pages/BlogSlider/Blog";
import ArticleDetail from "./Pages/BlogSlider/ArticleDetail";
import Location from "./Pages/DiscoverLocations/Location/Location";
import Kankpur from "./Pages/DiscoverLocations/Location/Kankpur";
import Team from "./Pages/DiscoverLocations/Location/Team/Team";
import RR from "./Pages/DiscoverLocations/Location/RR";
import Kodipalya from "./Pages/DiscoverLocations/Location/Kodipalya";
import AllTreatments from "./Pages/TrendingTreatments/AllTreatments/AllTreatments";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Pages/TermsService/TermsOfService";
 
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
                {/* <MissionVision /> */}
                <OurTeam />
                <LocationSection />
                <FirstStep />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactForm />
                <LocationSection />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Blog />
              </>
            }
          />
          <Route
            path="/blog-detail"
            element={
              <>
                <ArticleDetail />
              </>
            }
          />
          <Route
            path="/locations"
            element={
              <>
                <Location />
                <Kankpur />
                <Team />
                <RR />
                {/* <Team /> */}
                {/* <Kodipalya /> */}
              </>
            }
          />
          <Route
            path="/treatment"
            element={
              <>
                <AllTreatments />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <>
                <TermsOfService />
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
