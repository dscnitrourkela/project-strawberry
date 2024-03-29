import React, { useState, useEffect } from 'react'
import { Container } from '../styles/Common.styles'
import Ticker from '../components/PastSponsors/Ticker'
import FaqSection from '../components/FaqSection/Faq'
import { NavBar, Footer } from '../components/marginals'
import AboutUs from '../components/AboutUs/About'
import { MenuContext } from '../components/marginals/navbar/MenuContext'
import HeroSection from '../components/HeroSection/HeroSection'
import EventsSection from '../components/Events/Events'
import OurInvestors from '../components/OurInvestors/OurInvestors'
import PastSpeakers from '../components/PastSpeaker/HorizontalSlider'
import PreLoader from '../components/shared/Pre'

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <PreLoader load={load} />
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <HeroSection />
        <Container>
          <AboutUs />
          <EventsSection />
          <PastSpeakers />
          <OurInvestors />
          <Ticker />
          <FaqSection />
        </Container>
        <Footer />
      </MenuContext.Provider>
    </>
  )
}

export default IndexPage
