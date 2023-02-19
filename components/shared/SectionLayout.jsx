import React from 'react'

import styled from 'styled-components'
import tw from 'twin.macro'

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
    mt-14
    lg:mt-28
  `}
`

const Section = ({ children, id }) => (
  <SectionContainer id={id}>{children}</SectionContainer>
)

export default Section
