import React from 'react'
import { Heading3, Heading4, Body1, Body2 } from '../shared'
import {
  EventContainer,
  LeftContainer,
  EventImage,
  CompositeContainer,
  SubHeading,
  PrizesAmount,
  Button,
  RightContainer,
  AboutContainer,
  ContactContainer,
  ContactDetails,
  Contact,
} from '../../styles/event.details'

function EventDetail({
  pic,
  heading,
  subHeading,
  dateTime,
  location,
  prize,
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
            <Heading4 semibold>Prizes</Heading4>
            <PrizesAmount>
              Goodies worth<span> {prize}</span>
            </PrizesAmount>
          </CompositeContainer>
          <CompositeContainer>
            <Button>Register</Button>
          </CompositeContainer>
        </LeftContainer>

        <RightContainer>
          <AboutContainer>
            <Heading3 semibold>About</Heading3>
            <Body2>{desc}</Body2>
          </AboutContainer>
          <ContactContainer>
            <Heading4 semibold>Contact</Heading4>
            <ContactDetails>
              <Contact>{firstContact}</Contact>
              <Contact>{secondContact}</Contact>
            </ContactDetails>
          </ContactContainer>
        </RightContainer>
      </EventContainer>
    </>
  )
}

export default EventDetail
