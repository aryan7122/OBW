import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.scss";
import Navbar from "./Components/NavBar/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import ClinicalConcerns from "./Pages/ClinicalConcerns/ClinicalConcerns";
import Locations from "./Pages/DiscoverLocations/Locations";
import TeamSection from "./Pages/TeamSection/TeamSection";
import TrendingTreatments from "./Pages/TrendingTreatments/TrendingTreatments";
import WhyChooseSection from "./Pages/WhyChooseSection/WhyChooseSection";
import BlogSlider from "./Pages/BlogSlider/BlogSlider";
import FAQSection from "./Pages/FAQSection/FAQSection";
import HappyClients from "./Pages/HappyClients/HappyClients.jsx";
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
import WebTabs from "./Components/WebTabs/WebTabs";
import FabulousSection from "./Pages/FabulousSection/FabulousSection";
import ClassicDeals from "./Pages/ClassicDeals/ClassicDeals";
import BannerSectionSalon from "./Pages/BannerSectionSalon/BannerSectionSalon";
import FaqC from "./Pages/AboutUs/ContactForm/FAQC/Faqc";
import { toast, Toaster } from "react-hot-toast"; // Import toast
import { TabContext } from "./util/TabContext.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import NavBar from "./SALON/Components/NavBar/NavBar.jsx";
import SalonHeroSection from "./SALON/Page/SalonHeroSection/SalonHeroSection.jsx";
import AboutUsSection from "./SALON/Page/AboutUsSection/AboutUsSection.jsx";
import ServicesSection from "./SALON/Page/ServicesSection/ServicesSection.jsx";
import TOPSERVICES from "./SALON/Page/TOPSERVICES/TOPSERVICES.jsx";
import LocationSelector from "./SALON/Page/LocationSelector/LocationSelector.jsx";
import ClassicDealsOffer from "./SALON/Page/ClassicDealsOffer/ClassicDealsOffer.jsx";
import WhyChooseUs from "./SALON/Page/WhyChooseUs/WhyChooseUs.jsx";
import TestimonialsSlider from "./SALON/Page/TestimonialsSlider/TestimonialsSlider.jsx";
import NewsArticles from "./SALON/Page/NewsArticles/NewsArticles.jsx";
import HeroGlowSection from "./SALON/Page/HeroGlowSection/HeroGlowSection.jsx";
import SalonFooter from "./SALON/Components/SalonFooter/SalonFooter.jsx";
import SalonBlog from "./SALON/Page/SalonBlog/SalonBlog.jsx";
import SalonBlogDetail from "./SALON/Page/SalonBlog/SalonBlogDetail/SalonBlogDetail.jsx";
import SalonContactUs from "./SALON/Page/SalonContactUs/SalonContactUs.jsx";
import SalonFaq from "./SALON/Page/SalonFaq/SalonFaq.jsx";
import SalonLocationSection from "./SALON/Page/SalonLocationSection/SalonLocationSection.jsx";
import SalonAboutPage from "./SALON/Page/SalonAbout/SalonAboutPage.jsx";

function Loader2() {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
}

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // setLoading(true);
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
  const { pageTab, changeTab } = useContext(TabContext);

  const dynamicFontStyle = {
    fontFamily:
      pageTab === "CLINIC"
        ? "'Geist', sans-serif"
        : "'Bricolage Grotesque', sans-serif",
  };

  return (
    <div className="App" style={dynamicFontStyle}>
      <Router>
        <Toaster position="top-center" reverseOrder={true} />
        <PageWrapper>
          <WebTabs />
          {pageTab === "CLINIC" && (
            <>
              <Navbar />
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/"
                  element={
                    <div className="CLINIC">
                      <HeroSection />
                      <ClinicalConcerns />
                      <TeamSection />
                      <WhyChooseSection />
                      <TrendingTreatments />
                      <FabulousSection />
                      <ClassicDeals />
                      <BlogSlider />
                      <HappyClients />
                      {/* <FAQSection /> */}
                      {/* <FirstStep /> */}
                      <BannerSectionSalon />
                    </div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <AboutUsHero />
                      <OurValue />
                      {/* <OurTeam /> */}
                      <MissionVision />
                      <LocationSection />
                      {/* <FirstStep /> */}
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <ContactForm />
                      <LocationSection />
                      <FaqC />
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
            </>
          )}
          {pageTab === "SALON" && (
            <div className="SALON">
              <NavBar />
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/"
                  element={
                    <>
                      <SalonHeroSection />
                      <AboutUsSection />
                      <ServicesSection />
                      <TOPSERVICES />
                      <LocationSelector />
                      <ClassicDealsOffer />
                      <WhyChooseUs />
                      <TestimonialsSlider />
                      <NewsArticles />
                      <HeroGlowSection />

                    </>
                  }
                />
                <Route
                  path="/blogs"
                  element={
                    <>
                      <SalonBlog />
                      <HeroGlowSection />

                    </>
                  }
                />
                <Route
                  // path="/blog-detail/:id"
                  path="/blog-detail/:slug"
                  element={
                    <>
                      <SalonBlogDetail />
                      {/* <HeroGlowSection /> */}

                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <SalonContactUs />
                      <SalonFaq />
                      <SalonLocationSection />

                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <SalonAboutPage />
                      <SalonLocationSection />
                      <HeroGlowSection />

                    </>

                  }
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
              <SalonFooter />
            </div>
          )}
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
