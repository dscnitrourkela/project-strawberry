import React from 'react'

import styled from 'styled-components'
import tw from 'twin.macro'
import Body2 from './Typography/Body2'

const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-col
    items-start
    justify-center
    mt-40
  `}
`

export const Description = styled(Body2)`
  ${tw`
    mt-2
    w-3/4
    md:w-full
  `}
`

const Section = ({ children, id, title }) => (
  <SectionContainer id={id}>{children}</SectionContainer>
)

export default Section
