import React, { useContext } from 'react'
import Link from 'next/link'
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
  // using menuContext to control nav opening

  const menuContext = useContext(MenuContext)
  const { toggleMenuOpen, menuOpen } = menuContext

  const handleClick = () => {
    toggleMenuOpen(false)
  }

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Link href="/">
            <Logo src={navbar.logo.src} alt={navbar.logo.alt} />
          </Link>
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
          <Link
            href="https://unstop.com/p/national-entrepreneurship-summit-national-e-summit-2023-nit-rourkela-659882"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn>Register</Btn>
          </Link>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
