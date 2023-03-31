import React, { useState } from 'react'
import { SectionLayout } from '../shared'
import {
  Container,
  FaqHead,
  FaqContainer,
  FaqMap,
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
                      <svg
                        cursor="pointer"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="h-20 w-20"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                      </svg>
                    ) : (
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="2em"
                          width="2em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
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
