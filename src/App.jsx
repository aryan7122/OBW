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
    </>
  )
}

export default App
