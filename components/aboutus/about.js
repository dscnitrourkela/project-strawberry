import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Heading3 from "../shared/Typography/Heading3";


const MainContainer = styled.div`
${
  tw`
  bg-[#1B1E1F]
  m-auto
  p-5
  `
}
`

const TextB = styled.p`
${
  tw`
  h-[220px]
  w-[574px]
  p-10
  text-white
  m-8
  text-justify
  h-full
  
  ` 
}
word-wrap:break-word;
@media only screen and (max-width:750px){
  border : 2.5px solid #486FFD;
  border-radius: 10px;
}
`;

const Flexcntn = styled.div`
  ${
    tw`
    inline-flex
    flex-row
    py-5
    justify-around
    
    w-full
    items-center
    
    `
  }
  display : flex;
  justify-content : center;
  justify-content: space-around;

  @media only screen and (min-width:1200px){
    padding: 20px 112px 20px 112px;
    margin-top: 20px;
  }
  @media only screen and (max-width:1200px){
    padding:0px;
    margin-top : 10px;
  }

`;

function Img(){
    return (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}

const ImgContainer = styled.div`
${
  tw`
  flex
  `
}
width: 562px;
@media only screen and (max-width:800px){
  display :none;
}
`
      
const Headi = styled.span`
${
  tw`
  text-white
  border-b-4
  pr-10
   ` 
}
border-color: #486FFD ;
padding: 8px 50px 8px 8px;
`;

const Headercntn = styled.div`
${
  tw`
  p-2
  `
}
`;

export default function About() {
  return (
    <>
    <MainContainer>
    <Headercntn>
      <Heading3><Headi>About Us</Headi></Heading3>
    </Headercntn>
    <Flexcntn>
      <ImgContainer><Img/></ImgContainer>
      <TextB>Hooked up with Design is to trigger your potential to come up with effective and attractive business design ideas to increase customer acquisition and retention rate. 
      It aims to provide business scenarios inspired by real-life cases and challenge teams to use design thinking principles to devise suitable approaches that hold the potential to disrupt the market. 
      Even today, companies overlook the importance of business design and steer their thoughts only in the direction of growing revenue and profit margins.  </TextB>
    </Flexcntn>
    </MainContainer>
    </>
  )
}

;
//console.log(typeof(TextB));
//console.log(Heading3);