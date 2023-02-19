import React from 'react'
import { Heading1, Heading4 } from '../shared'
import { Hero, TextBox, Date, ButtonContainer } from '../../styles/hero.styles'
import Button1 from '../shared/Button1'

function HeroSection() {
  return (
    <Hero>
      <TextBox>
        <Heading4>NIT ROURKELA'S</Heading4>
        <Heading1 semibold>E-SUMMIT 2023</Heading1>
        <Date semibold>28-29 January</Date>
      </TextBox>
      <ButtonContainer>
        <Button1>Label</Button1>
        <Button1 cover>Label</Button1>
      </ButtonContainer>
    </Hero>
  )
}

export default HeroSection
