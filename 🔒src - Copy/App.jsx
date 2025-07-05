import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

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
import Loader from "./Components/Loading/Loader";

function Loader2() {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
}

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location]); // Runs when the route changes

  return (
    <>
      {loading && <Loader2 />}
      <div style={{ display: loading ? "none" : "block" }}>{children}</div>
    </>
  );
}

function App() {
  return (
    <Router>
      <PageWrapper>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ClinicalConcerns />
                <WhyChooseSection />
                <TeamSection />
                <TrendingTreatments />
                <BlogSlider />
                <FAQSection />
                {/* <HappyClients /> */}
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
                {/* <OurTeam /> */}
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
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-detail/:id" element={<ArticleDetail />} />
          <Route
            path="/locations"
            element={
              <>
                <Location />
                <Kankpur />
                <Team />
                <RR />
              </>
            }
          />
          <Route path="/treatment" element={<AllTreatments />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </Router>
  );
}

export default App;
