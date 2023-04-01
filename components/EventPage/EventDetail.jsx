import React from 'react'
import { Heading3, Heading4, Body1, Body2 } from '../shared'
import {
  EventContainer,
  LeftContainer,
  EventImage,
  CompositeContainer,
  SubHeading,
  Button,
  RightContainer,
  AboutContainer,
  Contact,
} from '../../styles/event.details'

function EventDetail({
  pic,
  heading,
  subHeading,
  dateTime,
  location,
  desc,
  firstContact,
  secondContact,
}) {
  return (
    <>
      <EventContainer>
        <LeftContainer>
          <EventImage src={pic} alt="poster" />
          <CompositeContainer>
            <Heading3 semibold>{heading}</Heading3>
            <SubHeading>{subHeading}</SubHeading>
          </CompositeContainer>
          <CompositeContainer>
            <Body1>{dateTime}</Body1>
            <Body1>{location}</Body1>
          </CompositeContainer>
          <CompositeContainer>
            <Button>Register</Button>
          </CompositeContainer>
          <CompositeContainer>
            <Heading4 semibold>Contact</Heading4>
            <Contact>{firstContact}</Contact>
            <Contact>{secondContact}</Contact>
          </CompositeContainer>
        </LeftContainer>

        <RightContainer>
          <AboutContainer>
            <Heading3 semibold>About</Heading3>
            <Body2>{desc}</Body2>
          </AboutContainer>
        </RightContainer>
      </EventContainer>
    </>
  )
}

export default EventDetail
