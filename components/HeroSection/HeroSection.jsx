import React from 'react'
import { Heading1 } from '../shared'
import { Hero, TextBox, Date, ButtonContainer } from '../../styles/hero.styles'
import Button1 from '../shared/Button1'
import Link from 'next/link'

function HeroSection() {
  return (
    <Hero>
      <TextBox>
        {/* <Heading4>NIT ROURKELA'S</Heading4> */}
        <Heading1 semibold>National Entrepreneur Summit 2023</Heading1>
        <Date semibold>7-9 April</Date>
      </TextBox>
      <ButtonContainer>
        <Link
          href="https://unstop.com/p/national-entrepreneurship-summit-national-e-summit-2023-nit-rourkela-659882"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button1>Register</Button1>
        </Link>
        <Link href="#events">
          <Button1 cover>Events</Button1>
        </Link>
      </ButtonContainer>
    </Hero>
  )
}

export default HeroSection
