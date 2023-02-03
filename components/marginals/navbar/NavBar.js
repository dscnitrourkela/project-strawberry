import React, { useState } from 'react'
import Btn from './Button'
import navbar from '../../../config/content/navbar'
import NavText from '../../shared/Typography/Button'

import {
  NavContainer,
  NavLink,
  Nav,
  LogoContainer,
  Logo,
  HamburgerContainer,
  NavLinks,
  NavLinksContainer
} from './styles'

const NavBar = () => {
  let [open, setOpen] = useState(false)

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Logo src={navbar.logo.src} alt={navbar.logo.alt} />
        </LogoContainer>

        <HamburgerContainer onClick={() => setOpen(!open)}>
          <img src={navbar.hamburger.src} alt={navbar.hamburger.alt} />
        </HamburgerContainer>

        <NavLinks className={` ${open ? 'open-nav' : 'closed-nav'}`}>
          {navbar.Links.map(link => (
            <NavLinksContainer key={link.name} id={link.id}>
              <NavLink href={link.link}>
                <NavText>{link.name}</NavText>
              </NavLink>
            </NavLinksContainer>
          ))}
          <Btn>Register</Btn>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
