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
  Underline,
} from '../../styles/aboutus.styles'
import SectionHeading from '../shared/SectionHeading'

export default function About() {
  return (
    <SectionLayout>
      <SectionHeading title={'About Us'} width={220} />
      <MainContainer id="AboutUs">
        <Flexcntn>
          <ImgContainer>
            <Img />
          </ImgContainer>
          <TextBox>
            <Body2>
              Hooked up with Design is to trigger your potential to come up with
              effective and attractive business design ideas to increase
              customer acquisition and retention rate. It aims to provide
              business scenarios inspired by real-life cases and challenge teams
              to use design thinking principles to devise suitable approaches
              that hold the potential to disrupt the market. Even today,
              companies overlook the importance of business design and steer
              their thoughts only in the direction of growing revenue and profit
              margins.
            </Body2>
          </TextBox>
        </Flexcntn>
      </MainContainer>
    </SectionLayout>
  )
}
