import React, { useState } from 'react'
import { Container } from '../styles/Common.styles'
import Ticker from '../components/PastSponsors/Ticker'
import FaqSection from '../components/FaqSection/Faq'
import { NavBar } from '../components/marginals'
import { MenuContext } from '../components/marginals/navbar/MenuContext'

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)

  return (
    <>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <Container>
          <Ticker />
          <FaqSection />
        </Container>
      </MenuContext.Provider>
    </>
  )
}

export default IndexPage
