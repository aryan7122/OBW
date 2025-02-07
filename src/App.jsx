import { useState } from 'react'

import './App.css'
import Navbar from './Components/NavBar/Navbar'
import HeroSection from './Pages/HeroSection/HeroSection'
import ClinicalConcerns from './Pages/ClinicalConcerns/ClinicalConcerns'
import Locations from './Pages/DiscoverLocations/Locations'
import TeamSection from './Pages/TeamSection/TeamSection'
import TrendingTreatments from './Pages/TrendingTreatments/TrendingTreatments'
import WhyChooseSection from './Pages/WhyChooseSection/WhyChooseSection'
import BlogSlider from './Pages/BlogSlider/BlogSlider'
import FAQSection from './Pages/FAQSection/FAQSection'
import HappyClients from './Pages/HappyClients/HappyClients'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <ClinicalConcerns/>
      <Locations />
      <TeamSection />
      <TrendingTreatments />
      <WhyChooseSection />
      <BlogSlider />
      <FAQSection />
      <HappyClients />
    </>
  )
}

export default App
