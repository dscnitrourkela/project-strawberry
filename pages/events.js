import React, { useState } from 'react'
import { NavBar, Footer } from '../components/marginals'
import EventDetail from '../components/EventPage/EventDetail'
import { Container } from '../styles/Common.styles'
import { MenuContext } from '../components/marginals/navbar/MenuContext'

function events() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)

  return (
    <>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <Container>
          <EventDetail />
        </Container>
        <Footer />
      </MenuContext.Provider>
    </>
  )
}

export default events
