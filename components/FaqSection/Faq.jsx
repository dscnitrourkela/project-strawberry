import React, { useState } from 'react'
import { Heading3, SectionLayout } from '../shared'

import {
  Container,
  FaqHead,
  FaqContainer,
  FaqMap,
  Image,
  FaqQuestion,
} from '../../styles/faq.styles'
import { FaqData } from '../../config/index.js'
import SectionHeading from '../shared/SectionHeading'

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
        <SectionHeading title={FaqData.title} width={165} />
        <Container>
          <FaqContainer>
            {FaqData.questions.map((item, index) => (
              <FaqMap key={index} onClick={() => toggleAccordion(index)}>
                <FaqHead>
                  <FaqQuestion className={accordion === index ? 'active' : ''}>
                    {item.question}
                  </FaqQuestion>
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
