import React from 'react'
import { Container } from '../styles/Common.styles'
import Heading1 from '../components/shared/Typography/Heading1'
import Heading2 from '../components/shared/Typography/Heading2'
import {NavBar} from '../components/marginals'

const IndexPage = () => (
  <Container>
    <NavBar/>
    <Heading1>Heading1</Heading1>
    <Heading2>Heading2</Heading2>
  </Container>
)

export default IndexPage
