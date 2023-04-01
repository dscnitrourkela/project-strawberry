import React from 'react'
import Body2 from '../shared/Typography/Body2'
import Heading3 from '../shared/Typography/Heading3'
import { SectionLayout } from '../shared'

//components
import {
  MainContainer,
  Flexcntn,
  ImgContainer,
  Img,
  TextBox,
} from '../../styles/aboutus.styles'
import SectionHeading from '../shared/SectionHeading'
import { AboutContent } from '../../config/index'

export default function About() {
  return (
    <SectionLayout id="AboutUs">
      <SectionHeading title={'About Us'} width={220} />
      <MainContainer>
        <Flexcntn>
          <ImgContainer>
            <Img />
          </ImgContainer>
          <TextBox>
            <Body2>{AboutContent.description}</Body2>
          </TextBox>
        </Flexcntn>
      </MainContainer>
    </SectionLayout>
  )
}
