import React from 'react'
import { Container } from '../styles/Common.styles'
import Ticker from '../components/PastSponsors/Ticker'
import FaqSection from '../components/FaqSection/Faq'

const IndexPage = () => (
  <Container>
    <Ticker />
    <FaqSection />
  </Container>
)

export default IndexPage
