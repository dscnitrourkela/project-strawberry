import React from 'react'

import {
  CardContainer,
  Investor,
  InvestorImage,
  Name,
  Designation,
  Description,
} from '../../styles/ourinvestors.styles'

function InvestorCard({name, desig, desc, pic}) {
  return (
    <CardContainer>
      <Investor>
        <InvestorImage src={pic} />
        <Name>{name}</Name>
        <Designation>{desig}</Designation>
      </Investor>
      <div>
        <Description>
          {desc}
        </Description>
      </div>
    </CardContainer>
  )
}

export default InvestorCard