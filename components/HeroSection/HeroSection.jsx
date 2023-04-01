import React from 'react'
import { Heading1, Heading4 } from '../shared'
import { Hero, TextBox, Date, ButtonContainer } from '../../styles/hero.styles'
import Button1 from '../shared/Button1'

function HeroSection() {
  return (
    <Hero>
      <TextBox>
        {/* <Heading4>NIT ROURKELA'S</Heading4> */}
        <Heading1 semibold>National Entrepreneur Summit 2023</Heading1>
        <Date semibold>7-9 April</Date>
      </TextBox>
      <ButtonContainer>
        <Button1>Register</Button1>
        <Button1 cover>Events</Button1>
      </ButtonContainer>
    </Hero>
  )
}

export default HeroSection
