import React, { useState } from 'react'
import { Body1, Heading3, SectionLayout } from '../shared'
import {
  Container,
  FaqHead,
  FaqContainer,
  FaqMap,
  Image,
  Underline,
} from '../../styles/faq.styles'
import { FaqData } from '../../config/index.js'

function FaqSection() {
  const [accordion, setActiveAccordion] = useState(-1)

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1)
      return
    }
    setActiveAccordion(index)
  }

  return (
    <>
      <SectionLayout>
        <Container>
          <Heading3 semibold>FAQs</Heading3>
          <Underline />
          <FaqContainer>
            {FaqData.questions.map((item, index) => (
              <FaqMap key={index} onClick={() => toggleAccordion(index)}>
                <FaqHead>
                  <Body1 className={accordion === index ? 'active' : ''}>
                    {item.question}
                  </Body1>
                  <div>
                    {accordion === index ? (
                      <Image src={FaqData.images.uparrow} alt="" />
                    ) : (
                      <span>
                        <Image src={FaqData.images.downarrow} alt="" />
                      </span>
                    )}
                  </div>
                </FaqHead>
                <div>
                  <p className={accordion === index ? 'active' : 'inactive'}>
                    {item.answer}
                  </p>
                </div>
              </FaqMap>
            ))}
          </FaqContainer>
        </Container>
      </SectionLayout>
    </>
  )
}

export default FaqSection
