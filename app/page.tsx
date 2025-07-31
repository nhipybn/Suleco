"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import AchievementsSection from "./components/AchievementsSection"
import ServicesSection from "./components/ServicesSection"
import ProcessSection from "./components/ProcessSection"
import TrainingSection from "./components/TrainingSection"
import TestimonialsSection from "./components/TestimonialsSection"
import SupportSection from "./components/SupportSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function JapanDispatchLanding() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} className="pt-0" />
      <AboutSection />
      <AchievementsSection />
      <ServicesSection />
      <ProcessSection />
      <TrainingSection />
      <TestimonialsSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
