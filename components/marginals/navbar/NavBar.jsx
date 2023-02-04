import React, { useContext } from 'react'
import Btn from '../../shared/Button'
import navbar from '../../../config/content/navbar'
import NavText from '../../shared/Typography/Button'
import { MenuContext } from './MenuContext'

import {
  NavContainer,
  NavLink,
  Nav,
  LogoContainer,
  Logo,
  NavLinks,
  NavLinksContainer,
  StyledHamburger,
} from '../../../styles/navbar.styles'

const NavBar = () => {
  const menuContext = useContext(MenuContext)
  const { toggleMenuOpen, menuOpen } = menuContext

  const handleClick = () => {
    toggleMenuOpen(false)
  }

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Logo src={navbar.logo.src} alt={navbar.logo.alt} />
        </LogoContainer>

        <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />

        <NavLinks className={` ${menuOpen ? 'open-nav' : 'closed-nav'}`}>
          {navbar.Links.map(link => (
            <NavLinksContainer key={link.name}>
              <NavLink href={link.link} onClick={handleClick}>
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
