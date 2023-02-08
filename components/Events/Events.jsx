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
  Underline,
  SectionTitle,
  Button,
} from '../../styles/events.styles'
const EventsSection = () => {
  return (
    <SectionLayout>
      <SectionTitle semibold>Events</SectionTitle>
      <Underline />
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
