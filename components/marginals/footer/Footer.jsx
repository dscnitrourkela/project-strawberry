import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import BodyText from '../../shared/Typography/Body1'
import footerContent from '../../../config/content/footerContent'

import {
  FooterContainer,
  Column,
  LogoColumn,
  MiddleColumn,
  Logo,
  SmLogos,
  SmLogo,
  Description,
  ColumnHeading,
  ContactHeading,
  FooterAnchor,
  ContactContainer,
  ContactLogo,
} from '../../../styles/footer.styles'

function Footer() {
  return (
    <FooterContainer>
      <LogoColumn>
        <div>
          <Logo
            src={footerContent.logo.src}
            alt={footerContent.logo.alt}
          />
        </div>
        <Description>
          <BodyText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </BodyText>
        </Description>
        <SmLogos>
          <SmLogo>
            <FaFacebookF />
          </SmLogo>
          <SmLogo>
            <FaTwitter />
          </SmLogo>
          <SmLogo>
            <FaInstagram />
          </SmLogo>
          <SmLogo>
            <FaLinkedinIn />
          </SmLogo>
          <SmLogo>
            <FaYoutube />
          </SmLogo>
        </SmLogos>
      </LogoColumn>

      <MiddleColumn>
        {footerContent.FooterColumns.map(column => (
          <Column>
            <ColumnHeading>{column.heading}</ColumnHeading>
            {column.FooterLinks.map(links => (
              <FooterAnchor>
                <BodyText>{links.name}</BodyText>
              </FooterAnchor>
            ))}
          </Column>
        ))}
      </MiddleColumn>

      <Column>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactContainer>
          <ContactLogo>
            <HiOutlineMail />
          </ContactLogo>
          <BodyText>contact@company.com</BodyText>
        </ContactContainer>
        <ContactContainer>
          <ContactLogo>
            <IoCallOutline />
          </ContactLogo>
          <BodyText>(414) 687 - 5892</BodyText>
        </ContactContainer>
        <ContactContainer>
          <ContactLogo>
            <HiOutlineLocationMarker />
          </ContactLogo>
          <BodyText>794 Mcallister St San Francisco, 94102</BodyText>
        </ContactContainer>
      </Column>
    </FooterContainer>
  )
}

export default Footer
