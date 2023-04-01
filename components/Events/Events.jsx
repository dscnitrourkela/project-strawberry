import React from 'react'
import Link from 'next/link'
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
  BackText,
} from '../../styles/events.styles'
import SectionHeading from '../shared/SectionHeading'
import Button1 from '../shared/Button1'
const EventsSection = () => {
  return (
    <SectionLayout>
      <SectionHeading title={Events.title} width={186} />
      <EventsContainer title="#events" id="events">
        {Events.data.map(item => (
          <FlippingCard>
            <Front key={item.id}>
              <Logo src={Events.images.logo} alt="Apple logo" />
              <FrontText>{item.content}</FrontText>
            </Front>
            <Back>
              <BackText>{item.backcontent}</BackText>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Button1 className="pb-2" small cover>
                  Register
                </Button1>
              </Link>
            </Back>
          </FlippingCard>
        ))}
      </EventsContainer>
    </SectionLayout>
  )
}

export default EventsSection
