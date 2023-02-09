import React from 'react'
import { Heading1, Heading4 } from '../shared'
import {
  Hero,
  TextBox,
  Date,
  Button1,
  Button2,
  ButtonContainer,
} from '../../styles/hero.styles'

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
        <Button2>Label</Button2>
      </ButtonContainer>
    </Hero>
  )
}

export default HeroSection
