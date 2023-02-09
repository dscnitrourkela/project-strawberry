import React, { useState } from 'react'
import { Container } from '../styles/Common.styles'
import Ticker from '../components/PastSponsors/Ticker'
import FaqSection from '../components/FaqSection/Faq'
import { NavBar, Footer } from '../components/marginals'
import AboutUs from '../components/AboutUs/About'
import { MenuContext } from '../components/marginals/navbar/MenuContext'
import HeroSection from '../components/HeroSection/HeroSection'
import EventsSection from '../components/Events/Events'
import OurInvestors from '../components/OurInvestors/OurInvestors'

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)

  return (
    <>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <HeroSection />
        <Container>
          <AboutUs/>
          <Ticker />
          <FaqSection />
          <OurInvestors/>
          <EventsSection />
        </Container>
        <Footer/>
      </MenuContext.Provider>
    </>
  )
}

export default IndexPage
