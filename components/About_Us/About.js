import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Heading3 from "../shared/Typography/Heading3";
import Heading4 from "../shared/Typography/Heading4";
import Body1 from "../shared/Typography/Body1";
import Body2 from "../shared/Typography/Body2";

//components
import { MainContainer } from "./styles";
import { Headercntn } from "./styles";
import { Headi } from "./styles";
import { Flexcntn } from "./styles";
import { ImgContainer } from "./styles";
import { Img } from "./styles";
import { TextBox } from "./styles";


export default function About() {
  return (
    <>
    <MainContainer>
    <Headercntn>
      <Heading4><Headi>About Us</Headi></Heading4>
    </Headercntn>
    <Flexcntn>
      <ImgContainer><Img/></ImgContainer>
      <TextBox><Body2>Hooked up with Design is to trigger your potential to come up with effective and attractive business design ideas to increase customer acquisition and retention rate. 
      It aims to provide business scenarios inspired by real-life cases and challenge teams to use design thinking principles to devise suitable approaches that hold the potential to disrupt the market. 
      Even today, companies overlook the importance of business design and steer their thoughts only in the direction of growing revenue and profit margins.  
      </Body2></TextBox>
    </Flexcntn>
    </MainContainer>
    </>
  )
}

;