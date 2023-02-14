import React from 'react'
import SectionLayout from '../shared/SectionLayout'
import { Events } from '../../config/index.js'
import {
  EventsContainer,
  FlippingCard,
  Front,
  Logo,
  FrontText,
  Back,
  Button,
} from '../../styles/events.styles'
import SectionHeading from '../shared/SectionHeading'
const EventsSection = () => {
  return (
    <SectionLayout>
      <SectionHeading title={Events.title} width={186} />
      <EventsContainer>
        {Events.data.map(item => (
          <FlippingCard>
            <Front key={item.id}>
              <Logo src={Events.images.logo} alt="Apple logo" />
              <FrontText>{item.content}</FrontText>
            </Front>
            <Back>
              <Button>Label</Button>
            </Back>
          </FlippingCard>
        ))}
      </EventsContainer>
    </SectionLayout>
  )
}

export default EventsSection
