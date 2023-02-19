import React, { useState } from 'react'
import { NavBar, Footer } from '../components/marginals'
import EventDetail from '../components/EventPage/EventDetail'
import EventDetails from '../config/content/EventDetails'
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
          {EventDetails.EventDetail.map(Detail => (
            <EventDetail
              heading={Detail.heading}
              subHeading={Detail.subHeading}
              desc={Detail.desc}
              pic={Detail.pic}
              dateTime={Detail.dateTime}
              location={Detail.location}
              prize={Detail.prize}
              firstContact={Detail.firstContact}
              secondContact={Detail.secondContact}
            />
          ))}
        </Container>
        <Footer />
      </MenuContext.Provider>
    </>
  )
}

export default events
