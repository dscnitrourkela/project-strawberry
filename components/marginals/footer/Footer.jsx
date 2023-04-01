import React from 'react'
import Link from 'next/link'
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
  ContactHeading,
  ContactContainer,
  ContactLogo,
  CentralImgNIT,
  CentralImgEcell,
  CentralBar,
  Numbers,
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
            National Entrepreneur Summit,
            National Institute of Technology, Rourkela
          </BodyText>
        </Description>
        <SmLogos>
          <SmLogo>
            <Link href="https://www.facebook.com/ecellnitr" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
            </Link>
          </SmLogo>
          <SmLogo>
            <Link href="https://twitter.com/ECellNITR" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            </Link>
          </SmLogo>
          <SmLogo>
            <Link href="https://instagram.com/ecell_nitrourkela" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </Link>
          </SmLogo>
          <SmLogo>
            <Link href="https://www.linkedin.com/company/entrepreneurship-cell-nit-rourkela/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            </Link>
          </SmLogo>
          <SmLogo>
            <Link href="https://www.youtube.com/@Ecellnitrkl" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            </Link>
          </SmLogo>
        </SmLogos>
      </LogoColumn>

      <MiddleColumn>
        <CentralImgNIT src="https://res.cloudinary.com/drpkgjnij/image/upload/v1680343345/Anmol%20Pattnayak/NITr-02_cldtpg.png"/>
        <CentralBar/>
        <CentralImgEcell src="https://res.cloudinary.com/drpkgjnij/image/upload/v1680343934/Anmol%20Pattnayak/Ecell-02_hlufqq.png"/>
      </MiddleColumn>

      <Column>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactContainer>
          <ContactLogo>
            <HiOutlineMail />
          </ContactLogo>
          <BodyText>nes.ecell.nitrkl@gmail.com</BodyText>
        </ContactContainer>
        <ContactContainer>
          <ContactLogo>
            <IoCallOutline />
          </ContactLogo>
          <Numbers>
            <BodyText>+91 7719861972</BodyText>
            <BodyText>+91 8319493047</BodyText>
            <BodyText>+91 8763637518</BodyText>
          </Numbers>
        </ContactContainer>
        <ContactContainer>
          <ContactLogo>
            <HiOutlineLocationMarker />
          </ContactLogo>
          <BodyText>NIT Rourkela, Odisha, India</BodyText>
        </ContactContainer>
      </Column>
    </FooterContainer>
  )
}

export default Footer
